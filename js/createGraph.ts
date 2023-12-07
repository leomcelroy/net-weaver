
type Node = {
  data: any,
  inputs: Array<string | null>,
  outputs: Array<Array<string>>,
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

  const nodes: Nodes = {};
  const edges: Edges = {};

  function getGraph(): Graph {
    return { nodes, edges };
  }

  function getNode(node_id: string): Node {
    const node = nodes[node_id];

    if (node === undefined) throw new Error(`Node ${node_id} does not exist.`);

    return node;
  }

  function addNode(data: object, n_inputs: number, n_outputs: number): string {
    const node_id = crypto.randomUUID();

    if (node_id in nodes) throw new Error(`Graph already has node with id ${node_id}.`)

    const node: Node = {
        data: data,
        inputs: Array(n_inputs).fill(null),
        outputs: Array(n_outputs).fill(null).map(x => []),
        id: node_id
    };

    nodes[node_id] = node;

    return node_id;
  }

  function removeNode(node_id: string): void {

    if (!(node_id in nodes)) throw new Error(`Node with ${node_id} does not exist.`);

    const node = nodes[node_id];

    for (const edge_set of node.outputs) {
      for (const edge of edge_set) {
        removeEdge(edge);
      }
    }

    for (const edge of node.inputs) {
      if (edge !== null) {
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
    const edge_id = crypto.randomUUID();

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
    src_node.outputs[src_idx].push(edge_id);
    const dst_node = getNode(dst_node_id);
    const existing_edge = dst_node.inputs[dst_idx];

    if (existing_edge !== null) removeEdge(existing_edge);

    dst_node.inputs[dst_idx] = edge_id;

    // Return the new edge id.
    return edge_id;
  }

  function removeEdge(edge_id: string): void {
    if (!(edge_id in edges)) throw new Error(`Edge ${edge_id} does not exist.`);

    const edge = getEdge(edge_id);
    const src_node = getNode(edge.src.node_id);
    src_node.outputs[edge.src.idx] = src_node.outputs[edge.src.idx].filter(id => id !== edge_id);
    const dst_node = getNode(edge.dst.node_id);
    dst_node.inputs[edge.dst.idx] = null;
    delete edges[edge_id];
  }  


  function getInputValues(
    node_id: string, 
    data_key: string
  ): any {
    const node = getNode(node_id);
    const values = node.inputs.map((edge_id, i) => {
      if (edge_id === null) return null;

      const edge = getEdge(edge_id);
      const input_id = edge.src.node_id;
      const input_node = getNode(input_id);

      return input_node.data[data_key];
    });

    return values;
  }

  function iterateInputs(
    node_id: string, 
    fn
  ): any {
    const node = getNode(node_id);
    const values = node.inputs.map((edge_id, i) => {
      if (edge_id === null) return null;

      const edge = getEdge(edge_id);
      const input_id = edge.src.node_id;
      const input_node = getNode(input_id);

      // pass output index

      return fn(input_node.data, edge.src.idx, i);
    });

    return values;
  }

  const events = {
    "addNode": [],
    "addEdge": [],
    "removeNode": [],
    "removeEdge": [],
    // "evaluate": []
  };

  function on(eventName, fn) {
    if (!(eventName in events)) {
      console.log("unknown event name", eventName);
      return;
    }

    events[eventName].push(fn);
  }

  return {
    getGraph,
    getNode,
    getEdge,
    addNode,
    addEdge,
    removeNode,
    removeEdge,
    getInputValues,
    iterateInputs,
    // on
    // topologicalSort
  }
}





