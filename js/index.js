import { state } from "./state.js";

import { render } from "lit-html";
import { view } from "./views/view.js";

import { createListener } from "./createListener.js";

import { addDropUpload } from "./events/addDropUpload.js";
import { addPanZoom } from "./events/addPanZoom.js";
import { addSelectBox } from "./events/addSelectBox.js";
import { addNodeAdding } from "./events/addNodeAdding.js";
import { addWireManipulation } from "./events/addWireManipulation.js";
import { addNodeDragging } from "./events/addNodeDragging.js";
// import { addLabelManipulation } from "./addLabelManipulation.js";

const drawLoop = () => {
  const draw = () => {
    render(view(state), document.body);
  }

  draw();

  const r = (time) => {
    draw();
    requestAnimationFrame(r);
  };

  requestAnimationFrame(r);
};

function init() {
  drawLoop();


  const domNode = document.body;

  const dataflow = domNode.querySelector(".dataflow");
  state.dataflow = addPanZoom(dataflow);

  const listener = createListener(document.body);

  addNodeDragging(listener, state);
  addWireManipulation(listener, state);
  addSelectBox(listener, state);
  addNodeAdding(listener, state);
  addDropUpload(file => {
    const { graph, graphUIData } = JSON.parse(file);
    state.graph.setGraph(graph);
    state.graphUIData = graphUIData;
    state.mutationActions.render();
  });

  domNode.addEventListener("keydown", e => {
    if (e.keyCode === 191) {
      // const container = body.querySelector(".dropdown-container");
      // global_state.openSearch = true;
      e.preventDefault();
    }
  })



}

init();




