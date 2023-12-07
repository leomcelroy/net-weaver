import { createListener } from "./createListener.js";

function getXY(e, el) {
  let rect = el.getBoundingClientRect();
  let x = e.clientX - rect.left; //x position within the element.
  let y = e.clientY - rect.top;  //y position within the element.

  return [ x, y ];
}

export function addNodeAdding(el, state) {
  const listen = createListener(el);

  let dragging = false;
  let id = "";

  listen("mousedown", ".node-type", e => {
    dragging = true;
    const typeToAdd = e.target.dataset.type;

    id = state.mutationActions.add_node(typeToAdd);
  })

  listen("mousemove", "", e => {
    if (!dragging) return;

    const el = state.domNode.querySelector(".dataflow");
    const [ x, y ] = state.dataflow.getPoint(...getXY(e, el));

    state.graphUIData[id].x = x;
    state.graphUIData[id].y = y;
  })

  listen("mouseup", ".node-toolbox", () => {
    if (dragging) {
      state.graph.removeNode(id);
    }
  })

  listen("mouseup", "", e => {
    id = "";
    dragging = false;
  })
}
