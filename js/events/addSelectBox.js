import { patchState } from "../state.js";

const getXY = (e, el) => {
  let rect = el.getBoundingClientRect();
  let x = e.clientX - rect.left; //x position within the element.
  let y = e.clientY - rect.top;  //y position within the element.

  return [ x, y ];
}

export function addSelectBox(listener, state) {
  let start = null;
  let end = null;
  const dataflow = state.dataflow;
  patchState({
    selectBox: {
      start: [0 ,0],
      end: [0, 0]
    }
  });

  listener("mousedown", ".nodes", e => {

    if (!e.shiftKey) return;

    const [x, y] = getXY(e, state.domNode.querySelector(".dataflow"));
    start = dataflow.getPoint(x, y);
  })

  listener("mousemove", "", e => {    
  	state.domNode.classList.add("no-select");
    if (!e.shiftKey) {
      start = null;
      end = null;
      patchState({
        selectBox: {
          start,
          end
        }
      });
      return;
    }
    if (start === null) return;

    const [x, y] = getXY(e, state.domNode.querySelector(".dataflow"));
    end = dataflow.getPoint(x, y);

    const newStart = [ 
      Math.min(start[0], end[0]),
      Math.min(start[1], end[1]),
    ];
    const newEnd = [
      Math.max(start[0], end[0]),
      Math.max(start[1], end[1]),
    ];

    patchState({
      selectBox: {
        start: newStart,
        end: newEnd
      }
    });

  })

  function contains (p, selectBox) {
    // console.log(p, selectBox);
    let { start, end } = selectBox;
    return (
      (p.x > start.x && p.x < end.x && p.y > start.y && p.y < end.y) ||
      (p.x > start.x && p.x < end.x && p.y < start.y && p.y > end.y) ||
      (p.x < start.x && p.x > end.x && p.y > start.y && p.y < end.y) ||
      (p.x < start.x && p.x > end.x && p.y < start.y && p.y > end.y)
    );
  };

  listener("mouseup", "", e => {
    if (!e.shiftKey) return;
  	state.domNode.classList.remove("no-select");
    if (start && end) {
      // select
      Object.entries(state.graphUIData).forEach(([k, n]) => {
        if (contains(n, { 
          start: { x: start[0], y: start[1] },
          end: { x: end[0], y: end[1] }
        }) && !state.selectedNodes.has(k)) state.selectedNodes.add(k);
      })
    }
    
    start = null;
    end = null;
    patchState({
      selectBox: {
        start,
        end
      }
    });
    
  })

}