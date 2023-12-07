import { addPanZoom } from "./addPanZoom.js";
import { addSelectBox } from "./addSelectBox.js";
import { addDropUpload } from "./addDropUpload.js";
import { addNodeAdding } from "./addNodeAdding.js";


const trigger = e => e.composedPath()[0];
const matchesTrigger = (e, selectorString) => trigger(e).matches(selectorString);
const pathContains = (e, selectorString) => e.composedPath().some(el => el.matches && el.matches(selectorString));
// create on listener
const createListener = (target) => (eventName, selectorString, event) => { // focus doesn't work with this, focus doesn't bubble, need focusin
  target.addEventListener(eventName, (e) => {
    e.trigger = trigger(e); // Do I need this? e.target seems to work in many (all?) cases
    if (selectorString === "" || matchesTrigger(e, selectorString)) event(e);
  })
}

function pauseEvent(e) {
  if(e.stopPropagation) e.stopPropagation();
  if(e.preventDefault) e.preventDefault();
  e.cancelBubble=true;
  e.returnValue=false;
  return false;
}

function getRelative(el0, el1) {
  // Get the top, left coordinates of two elements
  const eleRect = el0.getBoundingClientRect();
  const targetRect = el1.getBoundingClientRect();

  // Calculate the top and left positions
  const top = eleRect.top - targetRect.top;
  const left = eleRect.left - targetRect.left;

  return [ left, top ];
}

const getXY = (e, el) => {
  let rect = el.getBoundingClientRect();
  let x = e.clientX - rect.left; //x position within the element.
  let y = e.clientY - rect.top;  //y position within the element.

  return [ x, y ];
}

function addWireManipulation(listen, state) {
  let from = "";
  let to = "";
  let currentIndex = "";

  listen("mousedown", ".node-input-circle", e => {
    // if connected clickedKey is current input
    const [ node, _inOut, port ] = e.target.dataset.id.split(":");
    // check if input is destination
    for (const key in state.graph.getGraph().edges) {
      const edge = state.graph.getEdge(key);
      if (edge.dst.node_id === node && Number(port) === edge.dst.idx) {
        currentIndex = key;
      }
    }

    if (currentIndex !== "") {
      const src = state.graph.getEdge(currentIndex).src;
      from = `${src.node_id}:out:${src.idx}`;
    }

  })

  listen("mousedown", ".node-output-circle", e => {
    from = e.target.dataset.id;
  })

  listen("mouseup", ".node-input-circle", e => {
    to = e.target.dataset.id;
  })

  listen("mousemove", "", e => {
    if (from !== "") {
      const rect = state.domNode.querySelector(`[data-id="${from}"]`).getBoundingClientRect();
      const el0 = state.domNode.querySelector(`[data-id="${from}"]`);
      const el1 = state.domNode.querySelector(".dataflow");
      const [ rx, ry ] = getRelative(el0, el1);

      state.tempEdge = [
        from,
        getXY(e, el1)
      ];
      
    }

    if (currentIndex !== "") {
      state.mutationActions.remove_connection(currentIndex);
      currentIndex = "";
    }
  })


  listen("mouseup", "", e => {
    if (from === "") return;

    if (from !== "" && to !== "") {

      const [ node, _inOut, port ] = to.split(":");

      // check if input is destination
      for (const key in state.graph.getGraph().edges) {
        const edge = state.graph.getGraph().edges[key];
        if (edge.dst.node_id === node && Number(port) === edge.dst.port) {
          currentIndex = key;
        }
      }
      // console.log("add", from, to);

      if (currentIndex !== "") state.mutationActions.remove_connection(currentIndex);
      
      state.mutationActions.add_connection(from, to);
    }

    from = "";
    to = "";
    currentIndex = "";

    state.tempEdge = ["", [0, 0]];
    
  })

}

function addNodeDragging(listen, state) {
  let nodeClicked = false;
  let nodeId = "";
  let moved = false;

  listen("mousedown", "", e => {

    state.domNode.classList.add("no-select");
    const path = e.composedPath();
    if (path.some(div => div.matches && div.matches(".socket"))) {
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

    

  })

  listen("mouseup", "", e => {
    // TODO: if over toolbox then delete node

    state.domNode.classList.remove("no-select");

    nodeClicked = false;
    nodeId = "";
    state.dataflow.togglePanZoom(false);
    moved = false;

  })
}

export function addEvents(domNode, state) {

  const dataflow = domNode.querySelector(".dataflow");
  state.dataflow = addPanZoom(dataflow);

  const listen = createListener(domNode);

  addNodeDragging(listen, state);
  addWireManipulation(listen, state);
  addSelectBox(listen, state);
  addDropUpload(listen, state);

  addNodeAdding(domNode, state);

  domNode.addEventListener("keydown", e => {
    if (e.keyCode === 191) {
      // const container = body.querySelector(".dropdown-container");
      // global_state.openSearch = true;
      e.preventDefault();
    }
  })
}
