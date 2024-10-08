class GraphUnweightedUndirected {
  // Unweighted Undirected Graph class
  constructor() {
    this.connections = {};
  }

  addNode(node) {
    // Function to add a node to the graph (connection represented by set)
    this.connections[node] = new Set();
  }

  addEdge(node1, node2) {
    // Function to add an edge (adds the node too if they are not present in the graph)
    if (!(node1 in this.connections)) {
      this.addNode(node1);
    }
    if (!(node2 in this.connections)) {
      this.addNode(node2);
    }
    this.connections[node1].add(node2);
    this.connections[node2].add(node1);
  }

  DFSIterative(node, value) {
    // DFS Function to search if a node with the given value is present in the graph
    if (!(node in this.connections)) { // Changed 'startNode' to 'node'
      console.log(`Start node ${node} does not exist in the graph.`); // Updated the log message
      return false; // Early return if the node doesn't exist
    }

    const stack = [node];
    const visited = new Set();
    while (stack.length > 0) {
      const currNode = stack.pop();
      // If the current node contains the value being searched for, true is returned
      if (currNode === value) {
        return true;
      }
      // Adding the current node to the visited set
      visited.add(currNode);
      // Adding neighbors in the stack
      for (const neighbour of this.connections[currNode]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
    return false;
  }
}

export { GraphUnweightedUndirected };

// Example usage
// const graph = new GraphUnweightedUndirected();
// graph.addEdge(1, 2);
// graph.addEdge(2, 3);
// graph.addEdge(2, 4);
// graph.addEdge(3, 5);
// console.log(graph.DFSIterative(5, 1)); // Should print true or false
// console.log(graph.DFSIterative(5, 100)); // Should print false
