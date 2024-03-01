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
    <div
      class=${["node", selected ? "selected-node" : ""].join(" ")}
      data-id=${k}
      style=${`left: ${state.graphUIData[k].x}px; top: ${state.graphUIData[k].y}px;`}>
      <div class="node-title">
        <div class="node-name">${k} : ${nodeName}</div>
      </div>
      <div style="width: 100%; display: flex;">
        <div style="width: 50%;">
          ${node.data.ports
            .filter( port => port.leftRightUpDown === "left")
            .map((port, i) => html`
            <div>
              <div class="port port-left" style="top:${i*19 + 27}px" data-id=${`${k}:${port.idx}`}></div>
              <span style="padding-left: 10px;">${port.name}</span>
              </div>
            `)}
          </div>
        <div style="width: 50%;">
            ${node.data.ports
              .filter(port => port.leftRightUpDown === "right")
              .map((port, i) => html`
              <div>
                <div class="port port-right" style="top:${i*19 + 27}px" data-id=${`${k}:${port.idx}`}></div>
                <span style="padding-right: 10px; display: flex; justify-content: flex-end;">${port.name}</span>
                </div>
              `)}
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

