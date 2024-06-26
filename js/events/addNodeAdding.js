import { patchState } from "../state.js";

function getXY(e, el) {
  let rect = el.getBoundingClientRect();
  let x = e.clientX - rect.left; //x position within the element.
  let y = e.clientY - rect.top;  //y position within the element.

  return [ x, y ];
}

export function addNodeAdding(listen, state) {

  let dragging = false;
  let id = "";

  listen("mousedown", ".node-result, .node-result *", e => {
    dragging = true;
    console.log(e.target.closest(".node-result"))
    const typeToAdd = e.target.closest(".node-result").dataset.type;

    id = state.mutationActions.add_node(typeToAdd);
    patchState();
  })

  listen("mousemove", "", e => {
    if (!dragging) return;

    const el = state.domNode.querySelector(".dataflow");
    const [ x, y ] = state.dataflow.getPoint(...getXY(e, el));

    state.graphUIData[id].x = x;
    state.graphUIData[id].y = y;

    patchState();
  })

  listen("mouseup", ".node-toolbox, .node-toolbox *", () => {
    if (dragging === false) return;

    state.graph.removeNode(id);
    patchState();
  })

  listen("mouseup", "", e => {
    id = "";
    dragging = false;
    patchState();
  })
}
