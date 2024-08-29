import { state } from "./state.js";

import { generateSVGPCBcode } from "./generateSVGPCBcode.js";

import { render } from "lit-html";
import { view } from "./views/view.js";

import { createListener } from "./createListener.js";

import { loadUrlParam } from "./loadUrlParam.js";

import { addDropUpload } from "./events/addDropUpload.js";
import { addPanZoom } from "./events/addPanZoom.js";
import { addSelectBox } from "./events/addSelectBox.js";
import { addNodeAdding } from "./events/addNodeAdding.js";
import { addWireManipulation } from "./events/addWireManipulation.js";
import { addNodeDragging } from "./events/addNodeDragging.js";
import { addLabelManipulation } from "./events/addLabelManipulation.js";
import { nodes, createBlocks } from "./nodes.js";

const drawLoop = () => {
  const draw = () => {
    render(view(state), document.body);
  };

  draw();

  const r = (time) => {
    draw();
    requestAnimationFrame(r);
  };

  // requestAnimationFrame(r);
};

async function init() {
  // drawLoop();
  render(view(state), document.body);

  const domNode = document.body;

  const dataflow = domNode.querySelector(".dataflow");
  state.dataflow = addPanZoom(dataflow);

  const listener = createListener(document.body);

  addNodeDragging(listener, state);
  addWireManipulation(listener, state);
  addLabelManipulation(listener, state);
  addSelectBox(listener, state);
  addNodeAdding(listener, state);
  addDropUpload(uploadJSON);

  domNode.addEventListener("keydown", (e) => {
    if (e.target.matches("input")) return;

    if (e.keyCode === 191) {
      // const container = body.querySelector(".dropdown-container");
      // global_state.openSearch = true;
      e.preventDefault();
    }

    if (e.keyCode === 8) {
      for (const node of state.selectedNodes) {
        state.mutationActions.delete_node(node);
      }
    }
  });

  loadUrlParam("src").then((text) => {
    if (!text) return;
    uploadJSON(text);
  });

  function uploadJSON(json) {
    const { graph, graphUIData, labels } = JSON.parse(json);
    state.graph.setGraph(graph);
    state.graphUIData = graphUIData;
    state.labels = labels;
    state.mutationActions.render();
    state.mutationActions.render();
  }

  const json = await fetch("http://ctb.1337.cx:7761/library").then(
    async (res) => {
      console.log("fetched new components")
      const compLib = await res.json();
      const old = state.componentsLibrary;
      state.componentsLibrary = compLib;
      state.nodes = createBlocks(compLib.blocks);

      console.log({ lib: state.componentsLibrary, nodes: state.nodes})
    },
  );

}

init();
