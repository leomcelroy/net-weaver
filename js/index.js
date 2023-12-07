import { html } from "lit-html";
import { createGraphUI } from "./createGraphUI/createGraphUI";
import { createGraph } from "./createGraph";
import { topologicalSort } from "./topologicalSort";

const test = {
  name: "test",
  inputs: [
    ["i0", "power"],
    ["i1", "gnd"]
  ],
  outputs: [
    ["o0", "power"],
    ["o1", "gnd"]
  ],
}

const nodes = { test };

const drawNodeInput = (k, index, name) => html`
  <div class="node-input">
    <div
      class=${[
        "node-input-circle",
        "socket"
      ].join(" ")}
      data-id=${`${k}:in:${index}`}></div>
    <div class="node-input-name">${name}</div>
  </div>
`

const drawNodeOutput = (k, index, name) => html`
  <div class="node-output">
    <div class="node-output-name">${name}</div>
    <div
      class="node-output-circle socket"
      data-id=${`${k}:out:${index}`}></div>
  </div>
`

const drawNode = (item, state) => {
  const [ k, node ] = item;
  const master = node.data.master;
  const nodeName = master.name;
  const inputNames = master.inputs.map(x => x[0]);
  const outputNames = master.outputs.map(x => x[0]);

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
      ${inputNames.map((x, i) => drawNodeInput(k, i, x))}
      ${outputNames.map((x, i) => drawNodeOutput(k, i, x))}
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

let count = 0;
function addNode(menuString) {
  const master = config.nodes[menuString];
  const data = {
    master,
    outputValues: master.outputs.map(x => `DEFAULT_VALUE_${count++}`),
  };

  const id = config.graph.addNode(data, master.inputs.length, master.outputs.length);
  return id;

}


const state = createGraphUI(document.body, config);