import { render, html, svg } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat.js';
import { map } from 'lit-html/directives/map.js';
import { download } from "../download.js";
import { generateNets } from "../generateNets.js";

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

  if (!document.querySelector(".port") || state.dataflow === null) return "";

  const el0 = state.domNode.querySelector(`[data-id="${outNode_id}:${outNode_idx}"]`);
  const el1 = state.domNode.querySelector(`[data-id="${inNode_id}:${inNode_idx}"]`);

  if (!el0 || !el1) return "";


  const outNode = state.graph.getNode(outNode_id);
  const inNode = state.graph.getNode(inNode_id);

  const dataflow = state.domNode.querySelector(`.dataflow`);
  const offset0 = getRelative(el0, dataflow);
  const offset1 = getRelative(el1, dataflow);
  const rect0 = el0.getBoundingClientRect();
  const rect1 = el1.getBoundingClientRect();

  const scale = 1; // window.devicePixelRatio;

  const x0 = (offset0[0]+rect0.width/2)*scale;
  const y0 = (offset0[1]+rect0.height/2)*scale;
  let x1 = (offset1[0]+rect1.width/2)*scale;
  const y1 = (offset1[1]+rect1.height/2)*scale;

  let xDist = Math.abs(x0 - x1);
  xDist = xDist/1.3 + 10;
  // xDist = Math.max(xDist, 10);

  const outLeftOrRight = outNode.data.ports[outNode_idx].leftRightUpDown;
  const inLeftOrRight = inNode.data.ports[inNode_idx].leftRightUpDown;

  x1 = x1 + 5 * (inLeftOrRight === "left" ? -1 : 1)

  const data = `
    M ${x0} ${y0} 
    C 
      ${x0 + xDist * (outLeftOrRight === "left" ? -1 : 1)} ${y0}, 
      ${(x1 + 15 * (inLeftOrRight === "left" ? -1 : 1))  + xDist * (inLeftOrRight === "left" ? -1 : 1)} ${y1}, 
      ${(x1 + 15 * (inLeftOrRight === "left" ? -1 : 1)) } ${y1}
    `;

  const edgeArrowData = `
    M ${x1} ${y1} 
    L ${x1 + 15 * (inLeftOrRight === "left" ? -1 : 1)} ${y1+7} 
    L ${x1 + 15 * (inLeftOrRight === "left" ? -1 : 1)} ${y1-7}
  `

  return svg`
    <path class="edge" stroke-width=${`${3*state.dataflow.scale()}px`} vector-effect="non-scaling-stroke" d=${data}/>
    <path 
      class="edge-arrow"
      data-id=${edge.id}
      stroke-width=${`${3*state.dataflow.scale()}px`}
      vector-effect="non-scaling-stroke" 
      d=${edgeArrowData}
      />
  `
}

function drawTempEdge(edge, state) {
  if (!state.domNode.querySelector(".port")) return;

  let [ from, [x1, y1] ] = edge;

  if (from === "" || state.dataflow === null) return svg``;

  const el0 = state.domNode.querySelector(`[data-id="${from}"]`);
  const el1 = state.domNode.querySelector(`.dataflow`);
  const offset0 = getRelative(el0, el1);

  const scale = 1; // window.devicePixelRatio;

  let x0 = (offset0[0]+el0.getBoundingClientRect().width/2)*scale;
  let y0 = (offset0[1]+el0.getBoundingClientRect().height/2)*scale;
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
  
  const data = `M ${x0} ${y0} L ${x1} ${y1}`;

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



const filteredNodes = (state) => {
  const searchQuery = state.searchTerm.toLowerCase();
  const filteredNodes = Object.keys(state.nodes).filter(
    (nodeType) => nodeType.toLowerCase().includes(searchQuery)
  );

  const oneNodeHTML = (nodeType) => html`
    <div 
      class="node-type" 
      data-type=${nodeType}
      style="padding: .5em 1em; background: darkgrey; margin: .5em 0;">
      ${nodeType}
      </div>
  `

  return filteredNodes.map(oneNodeHTML);
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
          const graph = state.graph.getGraph();
          const nets = generateNets(graph);

          nets.forEach(net => {
            net.forEach(port => {
              const id = port.nodeId;
              port.name = id;
              port.portName = graph.nodes[id].data.ports[port.portIdx].name
            })
          })

          const copiedGraph = JSON.parse(JSON.stringify(graph));

          // add port name to graph;

          Object.entries(copiedGraph.edges).forEach(edge => {
            const [edgeId, data] = edge;

            const dstNode = graph.nodes[data.dst.node_id];
            const dstPortName = dstNode.data.ports[data.dst.idx].name;
            data.dst.portName = dstPortName;

            const srcNode = graph.nodes[data.src.node_id];
            const srcPortName = srcNode.data.ports[data.src.idx].name;
            data.src.portName = srcPortName;
          })

          const result = { 
            nets, 
            graph: copiedGraph,
            graphUIData: state.graphUIData
          };

          console.log(result);

          download(
            "netlist.json", 
            JSON.stringify(result)
          );
        }}>
          <i class="fa-solid fa-download" style="padding-right: 10px;"></i>
          download graph
        </div>

        <div class="menu-item" @click=${() => {
          for (const node of state.selectedNodes) {
            state.mutationActions.delete_node(node);
          }
        }}>
          <i class="fa-solid fa-trash" style="padding-right: 10px;"></i>
          delete
        </div>

        <div class="menu-item" @click=${() => {
          const newWireMode = state.wireMode === "WIRES" ? "LABELS" : "WIRES";
          state.wireMode = newWireMode;
        }}>
          <i class="fa-solid fa-circle-dot" style="padding-right: 10px;"></i>
          wire mode: ${state.wireMode}
        </div>

        <!--
        <div class="menu-item" @click=${() => {
          const graph = state.graph.getGraph();
          const nets = generateNets(graph);

          console.log(nets);

          download(
            "netlist.json", 
            JSON.stringify({ 
              nets, 
              graph,
              graphUIData: state.graphUIData
            })
          );
        }}>
          <i class="fa-solid fa-network-wired" style="padding-right: 10px;"></i>
          download netlist
        </div>
        -->

        <div class="menu-item-no-hover" style="position:absolute; right: 40px;">selected: ${state.selectedNodes.size}</div>
        <a class="github-logo" href="https://github.com/leomcelroy/net-weaver">
          <i class="fa-brands fa-github" style="font-size:24px"></i>
        </a>
      </div>

      <div style="display: flex; flex: 1; height: 96%; flex-direction: row;">
        <div class="dataflow" style="width: 100%; height: 100%;">
          <canvas
            id="background"
            style=${`--offset-x: ${x}px;--offset-y: ${y}px;--scale: ${scale}`}>
            </canvas>

         

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

           <svg class="edges">
            <g>
              ${Object.entries(state.graph.getGraph().edges).map(x => drawEdge(x[1], state))}
              ${drawTempEdge(state.tempEdge, state)}
            </g>
          </svg>
        </div>

        <div class="node-toolbox" style="width: 275px; background: lightgrey;">
          <div style="width: 100%; display: flex; justify-content: center; padding: 1em;">
            <input 
              style="width: 75%; height: 2em; border-radius: 1em; border: 1px solid grey; padding: .5em 1em;" 
              placeholder="add node..."
              .value=${state.searchTerm} 
              @input=${e => { state.searchTerm = e.target.value; }}
              />
          </div>
          <div style="overflow-y: scroll; height: 92%;">
            ${filteredNodes(state)}
          </div>
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
        ">
          <div>drop files here</div>
        </div>
    </div>
  `
}
