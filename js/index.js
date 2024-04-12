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

const drawLoop = () => {
  const draw = () => {
    render(view(state), document.body);
  }

  draw();

  const r = (time) => {
    draw();
    requestAnimationFrame(r);
  };

  // requestAnimationFrame(r);
};

function init() {
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

  domNode.addEventListener("keydown", e => {
    if (e.keyCode === 191) {
      // const container = body.querySelector(".dropdown-container");
      // global_state.openSearch = true;
      e.preventDefault();
    }
  })

  loadUrlParam("src").then(text => {
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




}

init();













