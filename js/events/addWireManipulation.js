import { patchState } from "../state.js";

export function addWireManipulation(listen, state) {
  let from = "";
  let to = "";
  let currentIndex = "";

  listen("mousedown", ".edge-arrow", e => {
    if (state.wireMode !== "WIRES") return;
    const edgeId = e.target.dataset.id;
    const edge = state.graph.getEdge(edgeId);

    from = `${edge.src.node_id}:${edge.src.idx}`

    state.graph.removeEdge(edgeId);

    const el0 = state.domNode.querySelector(`[data-id="${from}"]`);
    const el1 = state.domNode.querySelector(".dataflow");

    patchState({
      tempEdge: [
        from,
        getXY(e, el1)
      ]
    });

  })

  listen("mousedown", ".port", e => {
    if (state.wireMode !== "WIRES") return;
    if (e.target.matches("[is_sink]")) return;

    from = e.target.dataset.id;
  })

  listen("mouseup", ".port", e => {
    if (state.wireMode !== "WIRES") return;
    to = e.target.dataset.id;
  })

  listen("mousemove", "", e => {
    if (state.wireMode !== "WIRES") return;

    if (from !== "") {
      // const rect = state.domNode.querySelector(`[data-id="${from}"]`).getBoundingClientRect();
      const el0 = state.domNode.querySelector(`[data-id="${from}"]`);
      const el1 = state.domNode.querySelector(".dataflow");
      const [ rx, ry ] = getRelative(el0, el1);

      patchState({
        tempEdge: [
          from,
          getXY(e, el1)
        ]
      });
      
    }

    if (currentIndex !== "") {
      state.mutationActions.remove_connection(currentIndex);
      currentIndex = "";
    }
  })


  listen("mouseup", "", e => {
    if (state.wireMode !== "WIRES") return;

    if (from === "") return;

    if (from !== "" && to !== "") {

      const [ node, port ] = to.split(":");

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

    patchState({
      tempEdge: ["", [0, 0]]
    }); 
       
  });

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