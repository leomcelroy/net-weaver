import { render, html, svg } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat.js';
import { map } from 'lit-html/directives/map.js';


function getRelative(el0, el1) {
  // Get the top, left coordinates of two elements
  const eleRect = el0?.getBoundingClientRect() || { top: 0, left: 0 };
  const targetRect = el1?.getBoundingClientRect() || { top: 1, left: 1 };

  // Calculate the top and left positions
  const top = eleRect.top - targetRect.top;
  const left = eleRect.left - targetRect.left;

  return [ left, top ];
}

function drawEdge(edge, state) { // there muse be a better way to do this
  const { nodes } = state;
  const outNode_id = edge.src.node_id;
  const outNode_idx = edge.src.idx;
  const inNode_id = edge.dst.node_id;
  const inNode_idx = edge.dst.idx;

  if (!document.querySelector(".socket") || state.dataflow === null) return "";

  const el0 = state.domNode.querySelector(`[data-id="${outNode_id}:out:${outNode_idx}"]`);
  const el1 = state.domNode.querySelector(`[data-id="${inNode_id}:in:${inNode_idx}"]`);

  if (!el0 || !el1) return "";

  const dataflow = state.domNode.querySelector(`.dataflow`);
  const offset0 = getRelative(el0, dataflow);
  const offset1 = getRelative(el1, dataflow);
  const rect0 = el0.getBoundingClientRect();
  const rect1 = el1.getBoundingClientRect();

  const scale = 1; // window.devicePixelRatio;

  const x0 = (offset0[0]+rect0.width/2)*scale;
  const y0 = (offset0[1]+rect0.height/2)*scale;
  const x1 = (offset1[0]+rect1.width/2)*scale;
  const y1 = (offset1[1]+rect1.height/2)*scale;

  let xDist = Math.abs(x0 - x1);
  xDist = xDist/1.3;

  const data = `M ${x0} ${y0} C ${x0 + xDist} ${y0}, ${x1 - xDist} ${y1}, ${x1} ${y1}`;

  return svg`
    <path class="edge" stroke-width=${`${3*state.dataflow.scale()}px`} vector-effect="non-scaling-stroke" d=${data}/>
  `
}

function drawTempEdge(edge, state) {
  if (!state.domNode.querySelector(".socket")) return;

  let [ from, [x1, y1] ] = edge;

  if (from === "" || state.dataflow === null) return svg``;

  const el0 = state.domNode.querySelector(`[data-id="${from}"]`);
  const el1 = state.domNode.querySelector(`.dataflow`);
  const offset0 = getRelative(el0, el1);

  const scale = 1; // window.devicePixelRatio;

  let x0 = (offset0[0]+el0.getBoundingClientRect().width/2)*scale;
  let y0 = (offset0[1]+el0.getBoundingClientRect().height/2)*scale;
  x1 = x1 * scale;
  y1 = y1 * scale;

  let xDist = Math.abs(x0 - x1);
  xDist = xDist/1.3;

  const data = `M ${x0} ${y0} C ${x0 + xDist} ${y0}, ${x1 - xDist} ${y1}, ${x1} ${y1}`;

  return svg`
    <path class="edge" stroke-width=${`${3*state.dataflow.scale()}px`} vector-effect="non-scaling-stroke" d=${data}>
  `
}

const drawSelectBox = box => {
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
      `}>
    </div>
  `
}

const dropdown = (state) => {
  const searchQuery = state.searchTerm.toLowerCase();
  const filteredNodes = Object.keys(state.nodes).filter(
    (nodeType) => nodeType.toLowerCase().includes(searchQuery)
  );

  return html`
    <div class="menu-item dropdown-container">
      <i class="fa-solid fa-bars" style="padding-right: 10px;"></i>
      add node
      <div class="dropdown-list node-toolbox">
        <input class="node-search" .value=${state.searchTerm} @input=${e => {
          state.searchTerm = e.target.value;
        }}/>
        ${filteredNodes.map((nodeType) => html`
            <div class="menu-item node-type" data-type=${nodeType}>${nodeType}</div>
          `)}
      </div>
    </div>
  `
}

export function view(state) {
  const x = state.dataflow ? state.dataflow.x() : 0;
  const y = state.dataflow ? state.dataflow.y() : 0;
  const scale = state.dataflow ? state.dataflow.scale() : 1;

  return html`
    <div class="root">
      <div class="menu">
        <div class="menu-item" @click=${() => state.evaluate(...state.selectedNodes)}>
          <i class="fa-solid fa-play" style="padding-right: 10px;"></i>
          run
        </div>
        <div class="menu-item" @click=${() => { console.log(state.graph.getGraph()) }}>
          <i class="fa-solid fa-print" style="padding-right: 10px;"></i>
          print graph
        </div>
        <div class="menu-item" @click=${() => {
          for (const node of state.selectedNodes) {
            state.mutationActions.delete_node(node);
          }
        }}>
          <i class="fa-solid fa-trash" style="padding-right: 10px;"></i>
          delete
        </div>
        ${dropdown(state)}

        <div class="menu-item-no-hover" style="position:absolute; right: 40px;">selected: ${state.selectedNodes.size}</div>
        <a class="github-logo" href="https://github.com/leomcelroy/net-weaver">
          <i class="fa-brands fa-github" style="font-size:24px"></i>
        </a>
      </div>

      <div class="dataflow">
        <canvas
          id="background"
          style=${`--offset-x: ${x}px;--offset-y: ${y}px;--scale: ${scale}`}>
          </canvas>

        <svg class="edges">
          <g>
            ${Object.entries(state.graph.getGraph().edges).map(x => drawEdge(x[1], state))}
            ${drawTempEdge(state.tempEdge, state)}
          </g>
        </svg>

        <div class="nodes">
          <div class="transform-group">
            ${repeat(
                Object.entries(state.graph.getGraph().nodes), 
                item => item[0], 
                (item, index) => state.drawNode(item, state)
              )
            }
            ${drawSelectBox(state.selectBox)}
          </div>
        </div>
      </div>

    </div>
  `
}
