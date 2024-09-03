import { html, render } from "lit-html";
import { view } from "./views/view.js";

import { createGraph } from "./createGraph";
import { topologicalSort } from "./topologicalSort";
import { nodes } from "./nodes.js";
import { isValidPythonIdentifier } from "./isValidPythonIdentifier.js";

const r = () => {
  render(view(state), document.body);
};

export const state = {
  wireMode: "LABELS", // "WIRES" | "LABELS";
  labels: {},
  hoveredLabel: "",
  selectBox: {
    start: [0, 0],
    end: [0, 0],
  },
  graph: createGraph(),
  drawNode,
  evaluate,
  componentsLibrary: {
    blocks: [],
  },
  nodes,
  graphUIData: {},
  selectedNodes: new Set(),
  tempEdge: ["", [0, 0]],
  dataflow: null,
  searchTerm: "",
  searchResults: [],
  domNode: document.body,
  mutationActions: {
    render: r,
    add_node(menuString) {
      const id = addNode(menuString);

      state.graphUIData[id] = {
        x: -1000000,
        y: -1000000,
      };

      r();

      state.evaluate(id);

      return id;
    },
    delete_node(id) {
      state.graph.removeNode(id);
      delete state.graphUIData[id];
      state.selectedNodes.delete(id);

      // clear labels
      for (const labelId in state.labels) {
        const label = state.labels[labelId];

        if (label.nodeId === id) {
          delete state.labels[labelId];
        }
      }

      r();
    },
    move_node(id, dx, dy) {
      const node = state.graphUIData[id];
      if (!node) return;
      node.x += dx;
      node.y += dy;

      r();
    },
    add_connection(from, to) {
      if (state.addEdge) state.addEdge(from, to);

      const [srcNode, srcPort] = from.split(":");
      const [dstNode, dstPort] = to.split(":");

      state.graph.addEdge(
        {},
        srcNode,
        Number(srcPort),
        dstNode,
        Number(dstPort),
      );

      r();
    },
    remove_connection(index) {
      state.graph.removeEdge(index);

      r();
    },
  },
};

window.STATE = state;

function drawNode(item, state) {
  const [k, node] = item;

  const nodeName = node.data.name;

  // console.log(state.selectedNodes);
  const selected = state.selectedNodes.has(k);

  if (!state.graphUIData[k]) return "";

  const leftNodes = node.data.ports.filter(
    (port) => port.leftRightUpDown === "left",
  );
  const rightNodes = node.data.ports.filter(
    (port) => port.leftRightUpDown === "right",
  );

  function sortNodes(nodeList) {
    const result = {};
    node.data.ports.forEach((n) => {
      result[n.name] = [];
    });

    nodeList.forEach((n) => {
      if (n.elementOf !== undefined) {
        const portName = node.data.ports[n.elementOf].name;
        result[portName].push(n);
      } else {
        result[n.name].push(n);
      }
    });

    return Object.values(result).flat();
  }

  return html`
    <div
      class=${["node", selected ? "selected-node" : ""].join(" ")}
      data-id=${k}
      style=${`left: ${state.graphUIData[k].x}px; top: ${state.graphUIData[k].y}px;`}
    >
      <div class="node-title">
        <div class="node-name">
          <span
            class="node-id-value"
            @click=${(e) => {
              const newValue = prompt(
                "Please insert a new name.",
                node.data.name,
              );

              if (newValue === "" || newValue === null) return;

              if (!isValidPythonIdentifier(newValue)) {
                alert("Label names must be valid python identifiers.");
                return;
              }

              const existingNames = new Set(
                Object.values(state.graph.getGraph().nodes).map(
                  (node) => node.data.name,
                ),
              );
              let name = newValue;
              let ogName = name;

              let count = 0;
              while (existingNames.has(name)) {
                name = `${ogName}_${count}`;
                count++;
              }

              node.data.name = name;

              state.mutationActions.render();
            }}
            >${nodeName}</span
          >
        </div>
        <div hidden class="node-id">${k}</div>
      </div>

      <div class="node-ports">
        <div class="ports-container">
          ${sortNodes(leftNodes).map(
            (port, i) => html`
              <div style="display: flex; align-items: center;">
                <div
                  class="port"
                  ?is_array=${port.array}
                  ?elementOf=${port.elementOf !== undefined}
                  ?is_sink=${port.srcSinkBi === "sink"}
                  style="top:${i * 19 + 40}px"
                  data-id=${`${k}:${port.idx}`}
                ></div>
                <span ?is_required=${port.required} style="padding-left: 5px;"
                  >${port.name}</span
                >
              </div>
            `,
          )}
        </div>
        <div class="ports-container">
          ${sortNodes(rightNodes).map(
            (port, i) => html`
              <div
                style="display: flex; justify-content: flex-end; align-items: center;"
              >
                <span
                  ?is_required=${port.required}
                  style="padding-right: 5px; display: flex; justify-content: flex-end;"
                  >${port.name}</span
                >
                <div
                  class="port"
                  ?is_array=${port.array}
                  ?elementOf=${port.elementOf !== undefined}
                  ?is_sink=${port.srcSinkBi === "sink"}
                  style="top:${i * 19 + 40}px"
                  data-id=${`${k}:${port.idx}`}
                ></div>
              </div>
            `,
          )}
        </div>
      </div>
      <div class="all-arg-params">
        <!-- <div style="font-weight: bold;" ?hidden=${node.data.argParams
          .length === 0} >Arguments:</div> -->

        ${node.data.argParams.map((argParam) => {
          const { name, type, default_value, value } = argParam;

          const adjustArgValue = (e) => {
            const newValue = prompt(
              "Please input a value:",
              JSON.stringify(value),
            );

            const castFunction = {
              str: (val) => val,
              int: (val) => Number(val),
              bool: (val) => Boolean(val),
              float: (val) => Number(val),
              range: (val) => {
                let parsed = JSON.parse(val);

                if (typeof parsed === "number") {
                  parsed = [parsed - 0.05 * parsed, parsed + 0.05 * parsed];
                }

                return parsed;
              },
            }[type];

            if (newValue === "" || newValue === null) return;

            try {
              const castValue = castFunction(newValue);
              argParam.value = castValue;

              console.log(node);
              if (node.data.superClasses.includes("PassiveConnector")) {
                const newPorts = [];

                for (let i = 0; i < castValue; i++) {
                  newPorts.push({
                    array: false,
                    idx: i,
                    leftRightUpDown: "left",
                    name: `port_${i}`,
                    srcSinkBi: "bi",
                    type: "Passive",
                  });
                }

                node.data.ports = newPorts;

                node.ports = newPorts.map(() => []);
              }
            } catch (err) {
              alert(err);
            }

            state.mutationActions.render();
          };

          return html`
            <div class="arg-params">
              <!--
              <div class="arg-param">
                <span style="font-weight: bold;">name</span>:
                <span>${name}</span>
              </div>
              <div class="arg-param">
                <span style="font-weight: bold;">type</span>:
                <span>${type}</span>
              </div>
              <div class="arg-param arg-param-value" ?null-arg-param=${value ===
              null} @click=${adjustArgValue}>
                <span style="font-weight: bold;">value</span>:
                <span>${value ? JSON.stringify(value) : "NULL"}</span>
              </div>
              -->

              <div class="arg-param">
                <div>${name} (${type}):</div>
                <div
                  class="arg-param-value"
                  ?null-arg-param=${value === null}
                  @click=${adjustArgValue}
                >
                  ${JSON.stringify(value)}
                </div>
              </div>
            </div>
          `;
        })}
      </div>
      <div class="node-view" id=${"ID" + k}></div>
    </div>
  `;
}

function evaluate(...nodeIds) {
  const graph = state.graph.getGraph();

  const groups = topologicalSort(graph, nodeIds);

  // groups.forEach(nodeId => {
  //   const node = state.graph.getNode(nodeId);
  //   // console.log(node);
  //   const inputs = state.graph.iterateInputs(nodeId, (data, outIndex) => {
  //     return data.outputValues[outIndex];
  //   });

  //   console.log("this node has these", { inputs })
  // })
}

function addNode(menuString) {
  const master = state.nodes[menuString];
  const data = JSON.parse(JSON.stringify(master));

  const existingNames = new Set(
    Object.values(state.graph.getGraph().nodes).map((node) => node.data.name),
  );
  let name = data.name;
  let ogName = name;

  let count = 0;
  while (existingNames.has(name)) {
    name = `${ogName}_${count}`;
    count++;
  }

  data.name = name;

  data.argParams.forEach((param) => {
    param.value = param.default_value;
  });

  const id = state.graph.addNode(data, master.ports.length);
  return id;
}

export function patchState(newState, hardRender = false) {
  for (const key in newState) {
    if (!(key in state)) {
      console.warn(`Name not in state: ${key}`);
      continue;
    }

    state[key] = newState[key];
  }

  if (!hardRender) {
    requestAnimationFrame(r);
  } else {
    r();
  }
}
