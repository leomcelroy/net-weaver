import { addPanZoom } from "./addPanZoom.js";
import { addSelectBox } from "./addSelectBox.js";
import { addDropUpload } from "./addDropUpload.js";
import { addNodeAdding } from "./addNodeAdding.js";
import { addWireManipulation } from "./addWireManipulation.js";
import { addNodeDragging } from "./addNodeDragging.js";

import { createListener } from "./createListener.js";


export function addEvents(domNode, state) {

  const dataflow = domNode.querySelector(".dataflow");
  state.dataflow = addPanZoom(dataflow);

  const listen = createListener(domNode);

  addNodeDragging(listen, state);
  addWireManipulation(listen, state);
  addSelectBox(listen, state);
  // addDropUpload(listen, state);

  addNodeAdding(domNode, state);

  domNode.addEventListener("keydown", e => {
    if (e.keyCode === 191) {
      // const container = body.querySelector(".dropdown-container");
      // global_state.openSearch = true;
      e.preventDefault();
    }
  })
}
