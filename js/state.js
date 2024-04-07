import { html, render } from "lit-html";
import { view } from "./views/view.js";

import { createGraph } from "./createGraph";
import { topologicalSort } from "./topologicalSort";
import { nodes } from "./nodes.js";

const r = () => {
  render(view(state), document.body);
}

export const state = {
  wireMode: "LABELS", // "WIRES" | "LABELS";
  labels: {},
  hoveredLabel: "",
  selectBox: {
    start: [0, 0],
    end: [0, 0]
  },
  graph: createGraph(),
  drawNode,
  evaluate,
  nodes,
  graphUIData: {},
  selectedNodes: new Set(),
  tempEdge: ["", [0 ,0]],
  dataflow: null,
  searchTerm: "",
  domNode: document.body,
  mutationActions: {
    render: r,
    add_node(menuString) {
      const id = addNode(menuString);

      state.graphUIData[id] = {
        x: -1000000,
        y: -1000000
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

      const [srcNode, srcPort ] = from.split(":");
      const [dstNode, dstPort ] = to.split(":");

      state.graph.addEdge({}, srcNode, Number(srcPort), dstNode, Number(dstPort))

      r();
    },
    remove_connection(index) {
      state.graph.removeEdge(index);
      
      r();
    }
  }
}

window.STATE = state;

function drawNode(item, state) {
  const [ k, node ] = item;

  const nodeName = node.data.name;

  // console.log(state.selectedNodes);
  const selected = state.selectedNodes.has(k);

  if (!state.graphUIData[k]) return "";

  return html`
    <div class=${["node", selected ? "selected-node" : ""].join(" ")} data-id=${k} style=${`left: ${state.graphUIData[k].x}px; top: ${state.graphUIData[k].y}px;`}>
      
      <div class="node-title">
        <div class="node-name">
          <span class="node-id-value" @click=${e => {
            const newValue = prompt("Please insert a new name.")

            if (newValue === "" || newValue === null) return;

            node.data.name = newValue;
            
            state.mutationActions.render();
          }}>${nodeName}</span>
        </div>
        <div class="node-id" style="color: grey; font-size: .8rem;">
          id: ${k}
        </div>
      </div>
      
      <div style="width: 100%; display: flex;">
        <div style="width: 50%;">
          ${node.data.ports
            .filter( port => port.leftRightUpDown === "left")
            .map((port, i) => html`
              <div>
                <div class="port port-left" style="top:${i*19 + 40}px" data-id=${`${k}:${port.idx}`}></div>
                <span style="padding-left: 10px;">${port.name}</span>
              </div>
            `)}
        </div>
        <div style="width: 50%;">
            ${node.data.ports
              .filter(port => port.leftRightUpDown === "right")
              .map((port, i) => html`
              <div>
                <div class="port port-right" style="top:${i*19 + 40}px" data-id=${`${k}:${port.idx}`}></div>
                <span style="padding-right: 10px; display: flex; justify-content: flex-end;">${port.name}</span>
                </div>
              `)}
        </div>
      </div>
      <div class="all-arg-params">
        <div style="font-weight: bold;" ?hidden=${node.data.argParams.length === 0} >Arguments:</div>

        ${node.data.argParams.map(argParam => {
          const { name, type, default_value, value } = argParam;
          
          const adjustArgValue = e => {
            const newValue = prompt("Please input a value:", JSON.stringify(value));
            
            const castFunction = {
              "string": val => val,
              "int": val => Number(val),
              "bool": val => Boolean(val),
              "float": val => Number(val),
              "range": val => JSON.parse(val).map(Number)
            }[type];

            if (newValue === "" || newValue === null) return;

            try {
              argParam.value = castFunction(newValue);
            } catch (err) {
              alert(err);
            }

            state.mutationActions.render();
          }

          return html`
            <style>

              [null-arg-param] {
                background: #ef9696;
                border-radius: .2rem;
              }

              .arg-params {
                padding-top: .1rem;
              }

              .arg-param {
                padding: .1rem;
              }

              .arg-param-value:hover {
                background: lightgrey;
                cursor: pointer;
              }

              .arg-param-value {
                padding: .1rem;
                padding-left: .2rem;
                padding-right: .2rem;
                border-radius: .5rem;
              }
            </style>
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
              <div class="arg-param arg-param-value" ?null-arg-param=${value === null} @click=${adjustArgValue}>
                <span style="font-weight: bold;">value</span>:
                <span>${value ? JSON.stringify(value) : "NULL"}</span>
              </div>
              -->

              <div class="arg-param">
                <span>${name} (${type}):</span>
                <span class="arg-param-value" ?null-arg-param=${value === null} @click=${adjustArgValue}>
                  ${JSON.stringify(value)}
                </span>
              </div>

            </div>

          `
        })}
      </div>
      <div class="node-view" id=${"ID"+k}></div>
    </div>
  `
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

  data.argParams.forEach(param => {
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

