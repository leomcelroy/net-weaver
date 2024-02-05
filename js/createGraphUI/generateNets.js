export function generateNets({ nodes, edges }) {
  let nets = [];
  let visited = new Map();

  // Helper function to add a port to a net
  const addPortToNet = (netId, nodeId, portIdx) => {
    if (!nets[netId]) nets[netId] = [];
    nets[netId].push({ nodeId, portIdx });
  };

  // Helper function to find or create a net for a given port
  const findOrCreateNetForPort = (nodeId, portIdx) => {
    const visitedKey = `${nodeId}-${portIdx}`;
    if (visited.has(visitedKey)) {
      return visited.get(visitedKey);
    }
    const netId = nets.length;
    visited.set(visitedKey, netId);
    addPortToNet(netId, nodeId, portIdx);
    return netId;
  };

  // Process each edge to group connected ports
  Object.values(edges).forEach(edge => {
    const srcNodeId = edge.src.node_id;
    const srcPortIdx = edge.src.idx;
    const dstNodeId = edge.dst.node_id;
    const dstPortIdx = edge.dst.idx;

    const srcNetId = findOrCreateNetForPort(srcNodeId, srcPortIdx);
    const dstNetId = findOrCreateNetForPort(dstNodeId, dstPortIdx);

    // If src and dst are not in the same net, merge the nets
    if (srcNetId !== dstNetId) {
      const mergedNet = [...nets[srcNetId], ...nets[dstNetId]];
      // Update net ids for all ports in the merged net
      mergedNet.forEach(port => {
        visited.set(`${port.nodeId}-${port.portIdx}`, srcNetId);
      });
      nets[srcNetId] = mergedNet;
      // Mark the destination net as merged
      nets[dstNetId] = null;
    }
  });

  // Filter out null entries from merging nets and return
  return nets.filter(net => net !== null);
}