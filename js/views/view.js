import { render, html, svg } from "lit-html";
import { repeat } from "lit-html/directives/repeat.js";
import { map } from "lit-html/directives/map.js";
import { download } from "../download.js";
import { generateNets } from "../generateNets.js";
import { patchState } from "../state.js";
import { generateSVGPCBcode } from "../generateSVGPCBcode.js";
import { showModal } from "./showModal.js";
import { searchComponents } from "../searchComponents.js";
import { createSpinner } from "./createSpinner.js";
import { showError } from "../showError.js";
import { isValidPythonIdentifier } from "../isValidPythonIdentifier.js";

function getRelative(el0, el1) {
  // Get the top, left coordinates of two elements
  const eleRect = el0?.getBoundingClientRect() || { top: 0, left: 0 };
  const targetRect = el1?.getBoundingClientRect() || { top: 1, left: 1 };

  // Calculate the top and left positions
  const top = eleRect.top - targetRect.top;
  const left = eleRect.left - targetRect.left;

  return [left, top];
}

function drawLabel([labelId, label], state) {
  const { labelName, nodeId, portIdx } = label;

  if (labelName === "") {
    console.log("no label");
    return "";
  }

  const el = state.domNode.querySelector(`[data-id="${nodeId}:${portIdx}"]`);

  if (el === null) return "";

  const dataflow = state.domNode.querySelector(`.dataflow`);
  const offset = getRelative(el, dataflow);
  const rect = el.getBoundingClientRect();

  const scale = 1; // window.devicePixelRatio;

  let x = (offset[0] + rect.width / 2) * scale;
  let y = (offset[1] + rect.height / 2) * scale;

  const adjustedXY = state.dataflow.getPoint(x, y);
  x = adjustedXY[0];
  y = adjustedXY[1];

  const node = state.graph.getNode(nodeId);

  const leftOrRight = node.data.ports[portIdx].leftRightUpDown;

  const styleLeft = `
    left: ${x - 5}px;
    top: ${y}px;
    transform: translate(-100%, -50%);
    background: ${state.hoveredLabel === labelName ? "gold" : "lightgrey"};
  `;

  const styleRight = `
    left: ${x + 5}px;
    top: ${y}px;
    transform: translate(0, -50%);
    background: ${state.hoveredLabel === labelName ? "gold" : "lightgrey"};
  `;

  let divStyle = leftOrRight === "left" ? styleLeft : styleRight;

  const onClick = (e) => {
    const newName = prompt(
      "Please input a label name. Empty string will delete label.",
      labelName,
    );

    if (newName === null) return;
    if (!isValidPythonIdentifier(newName)) {
      alert("Label names must be valid python identifiers.");
      return;
    }
    if (newName === "") {
      const { nodeId, portIdx } = state.labels[labelId];

      delete state.labels[labelId];

      // if port now has no labels then delete it
      let deletePort =
        true &&
        state.graph.getNode(nodeId).data.ports[portIdx].elementOf !== undefined;

      Object.entries(state.labels).forEach(([k, v]) => {
        const localNodeId = v.nodeId;
        const localPortIdx = v.portIdx;

        if (localNodeId === nodeId && localPortIdx === portIdx) {
          deletePort = false;
        }
      });

      const nodeData = state.graph.getNode(nodeId).data;

      // if delete port then update all labels that are after
      // this is why I should always use IDs
      if (deletePort) {
        nodeData.ports = nodeData.ports.filter((x, i) => i !== portIdx);

        Object.entries(state.labels).forEach(([k, v]) => {
          const localNodeId = v.nodeId;
          const localPortIdx = v.portIdx;

          if (localNodeId === nodeId && localPortIdx > portIdx) {
            v.portIdx--;
            nodeData.ports[v.portIdx].idx--;
          }
        });
      }

      patchState({}, true);

      return;
    }

    label.labelName = newName;
    patchState();
  };

  return html`
    <div
      class="label"
      @click=${onClick}
      data-label-name=${labelName}
      style=${divStyle}
    >
      <span class="label-input"> ${labelName} </span>
    </div>
  `;
  /*
  <span
    contenteditable
    style=${inputStyle}
    @blur=${e => {
      const newName = e.target.innerText;
      if (newName === "") {
        delete state.labels[labelId];
        return;
      }

      label.labelName = newName;
      patchState();
    }}>
      ${labelName}
    </span>
  */
}

function drawEdge(edge, state) {
  // there muse be a better way to do this
  const { nodes } = state;
  const outNode_id = edge.src.node_id;
  const outNode_idx = edge.src.idx;
  const inNode_id = edge.dst.node_id;
  const inNode_idx = edge.dst.idx;

  if (!document.querySelector(".port") || state.dataflow === null) return "";

  const el0 = state.domNode.querySelector(
    `[data-id="${outNode_id}:${outNode_idx}"]`,
  );
  const el1 = state.domNode.querySelector(
    `[data-id="${inNode_id}:${inNode_idx}"]`,
  );

  if (!el0 || !el1) return "";

  const outNode = state.graph.getNode(outNode_id);
  const inNode = state.graph.getNode(inNode_id);

  const dataflow = state.domNode.querySelector(`.dataflow`);
  const offset0 = getRelative(el0, dataflow);
  const offset1 = getRelative(el1, dataflow);
  const rect0 = el0.getBoundingClientRect();
  const rect1 = el1.getBoundingClientRect();

  const scale = 1; // window.devicePixelRatio;

  const x0 = (offset0[0] + rect0.width / 2) * scale;
  const y0 = (offset0[1] + rect0.height / 2) * scale;
  let x1 = (offset1[0] + rect1.width / 2) * scale;
  const y1 = (offset1[1] + rect1.height / 2) * scale;

  let xDist = Math.abs(x0 - x1);
  xDist = xDist / 1.3 + 10;
  // xDist = Math.max(xDist, 10);

  const outLeftOrRight = outNode.data.ports[outNode_idx].leftRightUpDown;
  const inLeftOrRight = inNode.data.ports[inNode_idx].leftRightUpDown;

  x1 = x1 + 5 * (inLeftOrRight === "left" ? -1 : 1);

  const data = `
    M ${x0} ${y0}
    C
      ${x0 + xDist * (outLeftOrRight === "left" ? -1 : 1)} ${y0},
      ${
        x1 +
        15 * (inLeftOrRight === "left" ? -1 : 1) +
        xDist * (inLeftOrRight === "left" ? -1 : 1)
      } ${y1},
      ${x1 + 15 * (inLeftOrRight === "left" ? -1 : 1)} ${y1}
    `;

  const edgeArrowData = `
    M ${x1} ${y1}
    L ${x1 + 15 * (inLeftOrRight === "left" ? -1 : 1)} ${y1 + 7}
    L ${x1 + 15 * (inLeftOrRight === "left" ? -1 : 1)} ${y1 - 7}
  `;

  return svg`
    <path class="edge" stroke-width=${`${
      3 * state.dataflow.scale()
    }px`} vector-effect="non-scaling-stroke" d=${data}/>
    <path
      class="edge-arrow"
      data-id=${edge.id}
      stroke-width=${`${3 * state.dataflow.scale()}px`}
      vector-effect="non-scaling-stroke"
      d=${edgeArrowData}
      />
  `;
}

function drawTempEdge(edge, state) {
  if (!state.domNode.querySelector(".port")) return;

  let [from, [x1, y1]] = edge;

  if (from === "" || state.dataflow === null) return svg``;

  const el0 = state.domNode.querySelector(`[data-id="${from}"]`);
  const el1 = state.domNode.querySelector(`.dataflow`);
  const offset0 = getRelative(el0, el1);

  const scale = 1; // window.devicePixelRatio;

  let x0 = (offset0[0] + el0.getBoundingClientRect().width / 2) * scale;
  let y0 = (offset0[1] + el0.getBoundingClientRect().height / 2) * scale;
  // x1 = x1 * scale - 5;
  // y1 = y1 * scale - 5;

  // let xDist = Math.abs(x0 - x1);
  // xDist = xDist/1.3;

  // let [outNode_id, outNode_idx] = from.split(":");
  // outNode_idx = Number(outNode_idx);
  // const outNode = state.graph.getNode(outNode_id);
  // const outLeftOrRight = outNode.data.ports[outNode_idx].leftRightUpDown;

  // const inLeftOrRight = x1 > x0 ? "left" : "right";

  // const data = `M ${x0} ${y0} C ${x0 + xDist * (outLeftOrRight === "left" ? -1 : 1)} ${y0}, ${x1 + xDist * (inLeftOrRight === "left" ? -1 : 1)} ${y1}, ${x1} ${y1}`;

  // should remove set number of pixels
  const finalPoint = offsetPt([x0, y0], [x1, y1], 10);

  const data = `M ${x0} ${y0} L ${finalPoint[0]} ${finalPoint[1]}`;

  return svg`
    <path class="edge" stroke-width=${`${
      3 * state.dataflow.scale()
    }px`} vector-effect="non-scaling-stroke" d=${data}>
  `;

  function interpolatePts(p1, p2, t) {
    return [p1[0] + t * (p2[0] - p1[0]), p1[1] + t * (p2[1] - p1[1])];
  }

  function offsetPt(p1, p2, offset) {
    const dx = p2[0] - p1[0];
    const dy = p2[1] - p1[1];
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance === 0) {
      return p1; // If p1 and p2 are the same point, return p1
    }

    const ratio = offset / distance;
    return [p1[0] + dx * (1 - ratio), p1[1] + dy * (1 - ratio)];
  }
}

const drawSelectBox = (box) => {
  if (!box || !box.start || !box.end) return "";

  return html`
    <div
      class="select-box"
      style=${`
        background: blue;
        opacity: 0.1;
        z-index: 100;
        position: absolute;
        left: ${box.start[0]}px;
        top:${box.start[1]}px;
        width: ${Math.abs(box.end[0] - box.start[0])}px;
        height:${Math.abs(box.end[1] - box.start[1])}px;
      `}
    ></div>
  `;
};

const filteredNodes = (state) => {
  let filteredNodes =
    state.searchTerm === ""
      ? state.componentsLibrary.blocks
      : state.searchResults;

  filteredNodes = filteredNodes
    .filter((x) =>
      x.superClasses.some(
        (c) => !["InternalBlock", "InternalSubcircuit"].includes(c),
      ),
    )
    .filter((comp) => {
      if (
        ["InternalSubcircuit", "InternalBlock"].some((x) =>
          comp.superClasses.includes(x),
        )
      ) {
        return false;
      }

      if (comp.is_abstract) {
        return false;
      }

      return true;
    });

  const oneNodeHTML = ({ type, docstring, superClasses }) => html`
    <div class="node-result" data-type=${type}>
      <div class="node-type">${type}</div>
      <div class="node-tags">
        ${superClasses.map((x) => html` <span class="node-tag"> ${x} </span>`)}
      </div>
      <div class="node-docstring">${docstring}</div>
    </div>
  `;

  return filteredNodes.map(oneNodeHTML);
};

export function view(state) {
  const x = state.dataflow ? state.dataflow.x() : 0;
  const y = state.dataflow ? state.dataflow.y() : 0;
  const scale = state.dataflow ? state.dataflow.scale() : 1;

  return html`
    <div class="root">
      <div class="menu">
        <div
          hidden
          class="menu-item btn"
          @click=${() => {
            state.evaluate(...state.selectedNodes);

            console.log(state);
          }}
        >
          <i class="fa-solid fa-play"></i>
          run
        </div>

        <div
          class="menu-item btn"
          @click=${async () => {
            const URL = "https://webedg.uclalemur.com/compile";
            // const URL = "http://ctb.1337.cx:7761/compile";

            const netlist = getNetlist(state);
            console.log("sending", netlist);

            const spinner = createSpinner();

            try {
              const res = await fetch(URL, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(netlist),
              }).then((res) => {
                return res.json();
              });

              spinner.remove();

              console.log("responded", res);

              if (res.errors.length > 0) {
                showError(
                  res.errors.map((e) => `${e.details}:${e.kind}:${e.name}`),
                );
              }

              const code = generateSVGPCBcode(res);
              showModal(code);
            } catch (err) {
              spinner.remove();
              showError([JSON.stringify(err)]);
              console.error(err);
            }
          }}
        >
          <i class="fa-solid fa-square-share-nodes"></i>
          compile
        </div>

        <div
          class="menu-item btn"
          @click=${() => {
            const result = getNetlist(state);
            console.log(result);
          }}
        >
          <i class="fa-solid fa-print"></i>
          print graph
        </div>

        <div
          class="menu-item btn"
          @click=${() => {
            const result = getNetlist(state);

            console.log(result);

            download("netlist.net-weaver.json", JSON.stringify(result));
          }}
        >
          <i class="fa-solid fa-download"></i>
          download
        </div>

        <div class="menu-item dropdown-container">
          <i class="fa-solid fa-file"></i>
          examples
          <div class="dropdown">
            <a href="./?src=examples/BasicBlinky.json" class="dropdown-item"
              >Blinky</a
            >
            <a href="./?src=examples/CharlieMatrix.json" class="dropdown-item"
              >CharliePlex</a
            >
            <a href="./?src=examples/IotSensorThing.json" class="dropdown-item"
              >Sensor</a
            >
            <a href="./?src=examples/BasicKeyboard.json" class="dropdown-item"
              >Keyboard</a
            >
            <a href="./?src=examples/NeopixelArray.json" class="dropdown-item"
              >Neopixel</a
            >
            <a href="./?src=examples/I2cDevice.json" class="dropdown-item"
              >I2C</a
            >
          </div>
        </div>

        <div
          class="menu-item btn"
          @click=${() => {
            for (const node of state.selectedNodes) {
              state.mutationActions.delete_node(node);
            }
          }}
        >
          <i class="fa-solid fa-trash"></i>
          delete
        </div>

        <div
          hidden
          class="menu-item btn"
          @click=${() => {
            const newWireMode = state.wireMode === "WIRES" ? "LABELS" : "WIRES";
            state.wireMode = newWireMode;
          }}
        >
          <i class="fa-solid fa-circle-dot"></i>
          wire mode: ${state.wireMode}
        </div>

        <div class="menu-item" style="position:absolute; right: 40px;">
          selected: ${state.selectedNodes.size}
        </div>
        <a class="github-logo" href="https://github.com/leomcelroy/net-weaver">
          <i class="fa-brands fa-github" style="font-size:24px"></i>
        </a>
      </div>

      <div class="workspace">
        <div class="dataflow" style="width: 100%; height: 100%;">
          <canvas
            id="background"
            style=${`--offset-x: ${x}px;--offset-y: ${y}px;--scale: ${scale}`}
          >
          </canvas>

          <div class="nodes">
            <div class="transform-group">
              ${repeat(
                Object.entries(state.graph.getGraph().nodes),
                (item) => item[0],
                (item, index) => state.drawNode(item, state),
              )}
              <div class="labels">
                ${repeat(
                  Object.entries(state.labels),
                  (item) => item[0],
                  (item, index) => drawLabel(item, state),
                )}
              </div>

              ${drawSelectBox(state.selectBox)}
            </div>
          </div>

          <svg class="edges">
            <g>
              ${Object.entries(state.graph.getGraph().edges).map((x) =>
                drawEdge(x[1], state),
              )}
              ${drawTempEdge(state.tempEdge, state)}
            </g>
          </svg>
        </div>

        <div class="node-toolbox">
          <div class="node-search">
            <span>Nodes</span>
            <input
              placeholder="search for node..."
              .value=${state.searchTerm}
              @input=${(e) => {
                state.searchTerm = e.target.value;
                state.searchResults = searchComponents(e.target.value);

                patchState();
              }}
            />
          </div>
          <div class="toolbox-scroller">${filteredNodes(state)}</div>
        </div>
      </div>

      <div
        class="drop-modal hidden"
        style="
          position: absolute;
          left: 0px;
          top: 0px;
          width: 100%;
          height:100%;
          z-index: 1000;
          background: lightblue;
          opacity: .5;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <div>drop files here</div>
      </div>
    </div>
  `;
}

function getNetlist(state) {
  const copiedGraph = state.graph.copy();
  const { labels } = state;

  const edgesToAdd = {};

  Object.values(labels).forEach((label) => {
    const { labelName, nodeId, portIdx } = label;

    if (labelName in edgesToAdd) {
      edgesToAdd[labelName].push([nodeId, portIdx]);
    } else {
      edgesToAdd[labelName] = [[nodeId, portIdx]];
    }
  });

  Object.values(edgesToAdd).forEach((group) => {
    const [srcNode, srcPort] = group[0];
    group.slice(1).forEach((dst) => {
      const [dstNode, dstPort] = dst;

      copiedGraph.addEdge({}, srcNode, srcPort, dstNode, dstPort);
    });
  });

  const graph = copiedGraph.getGraph();

  const nets = generateNets(graph);

  nets.forEach((net) => {
    net.forEach((port) => {
      const id = port.nodeId;
      port.name = id;
      port.portName = graph.nodes[id].data.ports[port.portIdx].name;
    });
  });

  // add port name to graph;

  const graphToReturn = state.graph.copy().getGraph();

  Object.entries(graphToReturn.edges).forEach((edge) => {
    const [edgeId, data] = edge;

    const dstNode = graph.nodes[data.dst.node_id];
    const dstPortName = dstNode.data.ports[data.dst.idx].name;
    data.dst.portName = dstPortName;

    const srcNode = graph.nodes[data.src.node_id];
    const srcPortName = srcNode.data.ports[data.src.idx].name;
    data.src.portName = srcPortName;
  });

  const result = {
    nets,
    graph: graphToReturn,
    graphUIData: state.graphUIData,
    labels: JSON.parse(JSON.stringify(state.labels)),
  };

  return result;
}
