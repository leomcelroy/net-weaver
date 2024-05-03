import { createRandStr } from "../createRandStr.js";
import { patchState } from "../state.js";
import lib from "../componentsLibrary.js";
import { showError } from "../showError.js";

export function addLabelManipulation(listen, state) {
  let from = "";
  let to = "";
  let currentIndex = "";

  listen("mousedown", ".port", e => {
    if (state.wireMode !== "LABELS") return;
    if (e.target.matches("[is_sink]")) return;

    from = e.target.dataset.id;
  })

  listen("mouseup", ".port", e => {
    if (state.wireMode !== "LABELS") return;
    to = e.target.dataset.id;
  })

  let inside = false;
  listen("mousemove", "", e => {
    const label = e.target.closest(".label");
    if (label) {
      inside = true;
      patchState({
        hoveredLabel: label.dataset.labelName
      });
    } else if (inside) {
      inside = false;

      patchState({
        hoveredLabel: ""
      });
    }
  });

  listen("mousemove", "", e => {
    if (state.wireMode !== "LABELS") return;

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
  })

  listen("mouseup", "", e => {
    
    if (state.wireMode !== "LABELS") return;

    if (from === "") return;

    if (from !== "" && to !== "" && from !== to) {      

      const [ fromNode, fromPort ] = from.split(":");
      let [ toNode, toPort ] = to.split(":");

      // if to is an array sink add a new port 
      const toNodeObj = state
        .graph
        .getNode(toNode)
        .data;

      const toNodePortObj = state
        .graph
        .getNode(toNode)
        .data
        .ports
        [toPort];

      const fromNodePortObj = state
        .graph
        .getNode(fromNode)
        .data
        .ports
        [fromPort];

      const toAcceptableLinkTypes = [];
      const fromAcceptableLinkTypes = [];

      lib.links.forEach(link => {
        if (link.ports.map(p => p.type).some(type => toNodePortObj.type === type)) {
          toAcceptableLinkTypes.push(link.type)
        }


        if (link.ports.map(p => p.type).some(type => fromNodePortObj.type === type)) {
          fromAcceptableLinkTypes.push(link.type)
        }
      })

      if (!toAcceptableLinkTypes.some(type => fromAcceptableLinkTypes.includes(type))) {
        const err = `Can't link these types: ${fromAcceptableLinkTypes} to ${toAcceptableLinkTypes}`;
        showError([err], { time: 5000 })
        cleanUp();
        return;
      }

      if (toNodePortObj.array && toNodePortObj.srcSinkBi === "sink") {
        // add new port
        const newIdx = toNodeObj.ports.length;
        const newPort = {
          name: `${toNodePortObj.name}_${newIdx}`,
          array: false,
          idx: newIdx,
          leftRightUpDown: toNodePortObj.leftRightUpDown,
          srcSinkBi: "bi",
          type: toNodePortObj.type,
          elementOf: Number(toPort)
        }

        toNodeObj.ports.push(newPort);
        toPort = newIdx;

        state
          .graph
          .getNode(toNode)
          .ports
          .push([])
      }


      const labelName = state
        .graph
        .getNode(fromNode)
        .data
        .ports
        [fromPort]
        .name;

      // if label exists for src port use name of label, if not create name
      // if label on dst port, clear label

      let currentSrcPort = null;

      for (const labelId in state.labels) {
        const label = state.labels[labelId];
        const portKey = `${label.nodeId}:${label.portIdx}`;

        if (from === portKey) {
          console.log("coming from", label);
          currentSrcPort = label.labelName;
          delete state.labels[labelId];
        }

        if (to === portKey) {
          delete state.labels[labelId];
        }
      }

      state.labels[createRandStr(8)] = {
        labelName: currentSrcPort ? currentSrcPort : labelName,
        nodeId: fromNode,
        portIdx: Number(fromPort)
      }

      state.labels[createRandStr(8)] = {
        labelName: currentSrcPort ? currentSrcPort : labelName,
        nodeId: toNode,
        portIdx: Number(toPort)
      }
      
    }

    cleanUp();

    function cleanUp() {
      from = "";
      to = "";
      currentIndex = "";

      patchState({
        tempEdge: ["", [0, 0]]
      });
    }
    
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