export function topologicalSort(graph, triggerNodes, backward = true) {
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


  const grouping = getGroups(finalDepthMap);

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
  depths[id] = count++;

  if (depths[id] > Object.keys(graph.nodes).length) {
    console.warn("cycle detected in graph");
    return null;
  }

  let neighbors = graph
    .nodes[id]
    [backward ? "inputs" : "outputs"];

  if (!backward) neighbors = neighbors.flat();

  neighbors = neighbors
    .filter(x => x !== null)
    .map(x => graph.edges[x][backward ? "src" : "dst"].node_id) || [];

  neighbors.forEach(i => traverse(depths, graph, i, count, backward));
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