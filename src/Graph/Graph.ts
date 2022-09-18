interface GraphNode<T> {
  value: T;
  connection: T[];

}
interface NodeG<T> {
  [key: string]: GraphNode<T>
}
type ShowCon<T> = [T, GraphNode<T>]
class Graph {
  private _numberOfNodes: number;
  private _adjacentList: NodeG<string>;
  constructor() {
      this._numberOfNodes = 0;
      this._adjacentList = {};
  }
  addVertex(node: string): GraphNode<string> {
      if (!this._adjacentList[node]) {
          this._adjacentList[node] = { value: "1", connection: [] }
      }
      this._numberOfNodes++;
      return this._adjacentList[node];
  }
  addEdge(node1: string, node2: string):Graph {
      if (this._adjacentList[node1]) {
          this._adjacentList[node1].connection.push(node2)
      }
      else {
          this.addVertex(node1);
          this._adjacentList[node1].connection.push(node2)
      }
      if (this._adjacentList[node2]) {
          this._adjacentList[node2].connection.push(node1)
      }
      else {
          this.addVertex(node2);
          this._adjacentList[node2].connection.push(node1)
      }
      return this;
  }
  showConnections(): ShowCon<string>[] {
      return Object.entries(this._adjacentList)
  }

}
export default Graph;
const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

console.log(myGraph.showConnections())