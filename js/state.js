import { html } from "lit-html";
import { createGraphUI } from "./createGraphUI/createGraphUI";
import { createGraph } from "./createGraph";
import { topologicalSort } from "./topologicalSort";
import { nodes } from "./nodes.js";

const drawNode = (item, state) => {
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
        <div class="node-name">${nodeName}</div>
          </div>
      <div style="width: 100%; display: flex;">
        <div style="width: 50%;">
          ${node.data.ports
            .filter( port => port.leftRightUpDown === "left")
            .map((port, i) => html`
            <div style="width=100%">
              <div class="port port-left" style="top:${i*18 + 26}px" data-id=${`${k}:${port.idx}`}></div>
              <span style="padding-left: 10px;">${port.name}</span>
              </div>
            `)}
          </div>
        <div style="width: 50%;">
            ${node.data.ports
              .filter(port => port.leftRightUpDown === "right")
              .map((port, i) => html`
              <div style="width=100%">
                <div class="port port-right" style="top:${i*18 + 26}px" data-id=${`${k}:${port.idx}`}></div>
                <span style="padding-right: 10px; display: flex; justify-content: flex-end;">${port.name}</span>
                </div>
              `)}
            </div>
      <div class="node-view" id=${"ID"+k}></div>
      </div>
  `
}

const config = {
  graph: createGraph(),
  addNode,
  evaluate,
  nodes,
  drawNode,
}

function evaluate(...nodeIds) {
  return config.graph.getGraph();

  // topo sort and run
  // console.log(nodeIds);

  const graph = config.graph.getGraph();
  const groups = topologicalSort(graph, nodeIds).flat();

  groups.forEach(nodeId => {
    const node = config.graph.getNode(nodeId);
    // console.log(node);
    const inputs = config.graph.iterateInputs(nodeId, (data, outIndex) => {
      return data.outputValues[outIndex];
    });

    console.log("this node has these", { inputs })
  })

}

function addNode(menuString) {
  const master = config.nodes[menuString];
  const data = JSON.parse(JSON.stringify(master));
  data.type = "COMPONENT";

  const id = config.graph.addNode(data, master.ports.length);
  return id;
}

export const state = createGraphUI(document.body, config);

state.wireMode = "WIRES"; // "WIRES" | "LABELS";


window.STATE = state;
