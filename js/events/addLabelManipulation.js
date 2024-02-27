export function addLabelManipulation(listen, state) {
  let from = "";
  let to = "";
  let currentIndex = "";

  listen("mousedown", ".port", e => {
    from = e.target.dataset.id;
  })

  listen("mouseup", ".port", e => {
    to = e.target.dataset.id;
  })

  listen("mousemove", "", e => {
    if (state.wireMode !== "LABELS") return;

    if (from !== "") {
      // const rect = state.domNode.querySelector(`[data-id="${from}"]`).getBoundingClientRect();
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
    
    if (state.wireMode !== "LABELS") return;

    if (from === "") return;

    if (from !== "" && to !== "") {

      const [ node, port ] = to.split(":");

      console.log({ from , to })

      // add 2 nodes to graph of types label
      // add edge from out to 1 node
      // add edge from in to 1 node
      // add edge from out label node to in label node

      state.graph.addNode({
        type: "LABEL"
      }, 1)
    }

    console.log("CLEAR TEMP EDGE", state);

    from = "";
    to = "";
    currentIndex = "";

    state.tempEdge = ["", [0, 0]];
    
  })

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