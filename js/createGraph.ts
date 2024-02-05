import { generateRandomString } from "./generateRandomString.js";

type Node = {
  data: any,
  ports: Array<Array<string>>,
  id: string
}

type Edge = {
  data: any,
  src: {node_id: string, idx: number},
  dst: {node_id: string, idx: number},
  id: string
}

type Nodes = {
  [node_id: string]: Node
}

type Edges = {
  [edge_id: string]: Edge
}

type Graph = {
  nodes: Nodes,
  edges: Edges
}

export function createGraph() {

  let nodes: Nodes = {};
  let edges: Edges = {};

  function getGraph(): Graph {
    return { nodes, edges };
  }

  function getNode(node_id: string): Node {
    const node = nodes[node_id];

    if (node === undefined) throw new Error(`Node ${node_id} does not exist.`);

    return node;
  }

  function addNode(data: object, n_ports: number): string {
    const node_id = `_${generateRandomString(8)}`;

    if (node_id in nodes) throw new Error(`Graph already has node with id ${node_id}.`)

    const node: Node = {
        data: data,
        ports: Array(n_ports).fill(null).map(x => []),
        id: node_id
    };

    nodes[node_id] = node;

    return node_id;
  }

  function removeNode(node_id: string): void {

    if (!(node_id in nodes)) throw new Error(`Node with ${node_id} does not exist.`);

    const node = nodes[node_id];

    for (const edge_set of node.ports) {
      for (const edge of edge_set) {
        removeEdge(edge);
      }
    }

    delete nodes[node_id];
  }

  function getEdge(edge_id: string): Edge {
    const edge = edges[edge_id];

    if (edge === undefined) throw new Error(`Edge ${edge_id} does not exist.`);

    return edge;
  }

  function addEdge(
    data: object, 
    src_node_id: string,
    src_idx: number,
    dst_node_id: string,
    dst_idx: number
  ): string {
    const edge_id = `_${generateRandomString(8)}`;

    if (edge_id in edges) {
      throw new Error(`Edge ID ${edge_id} already exists.`);
    }

    const edge: Edge = {
      data: data,
      src: {node_id: src_node_id, idx: src_idx},
      dst: {node_id: dst_node_id, idx: dst_idx},
      id: edge_id
    };

    edges[edge_id] = edge;

    // Link it to its src and dst nodes.
    const src_node = getNode(src_node_id);
    src_node.ports[src_idx].push(edge_id);
    const dst_node = getNode(dst_node_id);
    dst_node.ports[dst_idx].push(edge_id);

    // Return the new edge id.
    return edge_id;
  }

  function removeEdge(edge_id: string): void {
    if (!(edge_id in edges)) throw new Error(`Edge ${edge_id} does not exist.`);

    const edge = getEdge(edge_id);
    const src_node = getNode(edge.src.node_id);
    src_node.ports[edge.src.idx] = src_node.ports[edge.src.idx].filter(id => id !== edge_id);
    const dst_node = getNode(edge.dst.node_id);
    dst_node.ports[edge.dst.idx] = dst_node.ports[edge.dst.idx].filter(id => id !== edge_id);

    delete edges[edge_id];
  }

  // const events = {
  //   "addNode": [],
  //   "addEdge": [],
  //   "removeNode": [],
  //   "removeEdge": [],
  //   // "evaluate": []
  // };

  // function on(eventName, fn) {
  //   if (!(eventName in events)) {
  //     console.log("unknown event name", eventName);
  //     return;
  //   }

  //   events[eventName].push(fn);
  // }

  return {
    getGraph,
    getNode,
    getEdge,
    addNode,
    addEdge,
    removeNode,
    removeEdge,
    setGraph(graph) {
      nodes = graph.nodes;
      edges = graph.edges;
    }
    // on
    // topologicalSort
  }
}





