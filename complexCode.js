/*
Filename: complexCode.js
Description: This code demonstrates a complex algorithm for finding the shortest path in a weighted graph using Dijkstra's algorithm.
Author: [Your Name]
Date: [Current Date]
*/

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = {};
  }

  addEdge(node1, node2, weight) {
    this.edges[node1][node2] = weight;
    this.edges[node2][node1] = weight;
  }

  dijkstra(startNode, endNode) {
    const distances = {};
    const previousNodes = {};
    const queue = [];

    // Set initial distances and add all nodes to the queue
    for (const node of this.nodes) {
      if (node === startNode) {
        distances[node] = 0;
        queue.push({ node, distance: 0 });
      } else {
        distances[node] = Infinity;
        queue.push({ node, distance: Infinity });
      }
      previousNodes[node] = null;
    }

    while (queue.length) {
      // Sort the queue by distance (ascending)
      queue.sort((a, b) => a.distance - b.distance);
      const { node } = queue.shift();

      if (node === endNode) {
        // Path found, construct and return the shortest path
        const path = [];
        let currentNode = endNode;
        while (currentNode !== null) {
          path.unshift(currentNode);
          currentNode = previousNodes[currentNode];
        }
        return path;
      }

      for (const neighbor in this.edges[node]) {
        const distance = distances[node] + this.edges[node][neighbor];
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          previousNodes[neighbor] = node;
        }
      }
    }

    // No path found
    return null;
  }
}

// Usage example
const graph = new Graph();

// Add nodes
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

// Add edges
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "C", 1);
graph.addEdge("B", "D", 5);
graph.addEdge("C", "D", 8);
graph.addEdge("C", "E", 10);
graph.addEdge("D", "E", 2);

// Find shortest path from node A to E
const shortestPath = graph.dijkstra("A", "E");
console.log("Shortest Path:", shortestPath);