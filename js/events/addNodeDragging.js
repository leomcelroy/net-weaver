import { patchState } from "../state.js";

const pathContains = (e, selectorString) => e.composedPath().some(el => el.matches && el.matches(selectorString));


export function addNodeDragging(listen, state) {
  let nodeClicked = false;
  let nodeId = "";
  let moved = false;

  listen("mousedown", "", e => {

    state.domNode.classList.add("no-select");
    const path = e.composedPath();
    if (path.some(div => div.matches && div.matches(".port, .edge-arrow"))) {
      state.dataflow.togglePanZoom(true);
      return;
    }

    if (!pathContains(e, ".dataflow")) return;

    if (pathContains(e, ".node-view")) {
      state.dataflow.togglePanZoom(true);
      return;
    }

    nodeClicked = path.find(div => div.matches && div.matches(".node"));

    if (nodeClicked) {
      state.dataflow.togglePanZoom(true);
      nodeId = nodeClicked.dataset.id;
      const selected = state.selectedNodes.has(nodeId);
      if (selected && e.detail === 2) { // if selected how to remove
        state.selectedNodes.delete(nodeId);
      } else if (!state.selectedNodes.has(nodeId) && !e.shiftKey){
        state.selectedNodes = new Set([nodeId]);
      } else if (!state.selectedNodes.has(nodeId) && e.shiftKey) {
        state.selectedNodes.add(nodeId);
      }
    } else if (!e.shiftKey) {
      state.selectedNodes = new Set();
    }

    patchState();
    
  })

  listen("mousemove", "", e => {
    if (!nodeClicked) return

    moved = true;

    const scale = state.dataflow.scale()
    state.selectedNodes.forEach(id => {
      state.mutationActions.move_node(
        id,
        e.movementX/scale,
        e.movementY/scale
      );
    })

    patchState();

  })

  listen("mouseup", "", e => {
    // TODO: if over toolbox then delete node

    state.domNode.classList.remove("no-select");

    nodeClicked = false;
    nodeId = "";
    state.dataflow.togglePanZoom(false);
    moved = false;

    patchState();
  })
}