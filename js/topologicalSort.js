export function topologicalSort(graph, triggerNodes, backward = true) {
  if (Object.keys(graph.edges).length === 0) return [];

  const depthMaps = triggerNodes.map(x => getDepths(graph, x, backward));

  const finalDepthMap = {};

  depthMaps.forEach(depths => {
    for (const id in depths) {
      if (id in finalDepthMap) {
        finalDepthMap[id] = Math.max(depths[id], finalDepthMap[id]);
      } else {
        finalDepthMap[id] = depths[id];
      }
    }
  })

  const grouping = getGroups(finalDepthMap).filter(x => x.length > 0);

  return grouping;
}

function getDepths(graph, node, backward) {
  const keys = Object.keys(graph.nodes);
  const depths = {};
  keys.forEach(k => depths[k] = -1);
  traverse(depths, graph, node, 0, backward);

  return depths;
}

const traverse = (depths, graph, id, count, backward) => {
  depths[id] = count;

  const { nodes, edges } = graph;

  if (depths[id] > Object.keys(nodes).length) {
    console.warn("cycle detected in graph");
    return null;
  }

  let neighbors = [];

  const ports = nodes[id]
    .ports
    .flat()
  
  for (const portId of ports) {
    const newNeighbor = edges
      [portId]
      [backward ? "src" : "dst"]
      .node_id;

    if (newNeighbor === id) continue;

    neighbors.push(newNeighbor);
  }
    

  neighbors.forEach(i => traverse(depths, graph, i, count+1, backward));
}

const getGroups = depths => {
  let depthGroups = [];
  for (const k in depths) {
    const depth = depths[k];
    if (depth < 0) continue;
    while (depthGroups.length <= depth) depthGroups.push([]);
    
    depthGroups[depth].push(k);
  }
  depthGroups = depthGroups.reverse();

  return depthGroups;
}