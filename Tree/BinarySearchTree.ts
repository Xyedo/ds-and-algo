import Queue from "../Queue/Queue";
import BinaryNode from "./Node";

class BinarySearchTree {
  root: BinaryNode<number> | null;
  constructor(root: BinaryNode<number> | null = null) {
    this.root = root;
  }
  insert(value: number): BinarySearchTree {
    const newNode = new BinaryNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let ptr = this.traverseToBeforeEnd(value, () => {
      throw new Error("No duplicate vertex allowed! ");
    });
    if (value === ptr.value) {
      throw new Error("No duplicate vertex allowed! ");
    }
    if (value < ptr.value) {
      ptr.left = newNode;
    } else {
      ptr.right = newNode;
    }
    return this;
  }
  private traverseToBeforeEnd(
    value: number,
    cb: (ptr: BinaryNode<number>) => void
  ) {
    let ptr = this.root as BinaryNode<number>;
    while (ptr.left !== null && ptr.right !== null) {
      if (value === ptr.value) {
        cb(ptr);
      }
      if (value < ptr.value) {
        ptr = ptr.left;
      } else {
        ptr = ptr.right;
      }
    }
    return ptr;
  }

  lookup(value: number): BinaryNode<number> | null {
    if (this.root === null) {
      return null;
    }
    let ret: BinaryNode<number> | null = null;
    const ptr = this.traverseToBeforeEnd(value, (val) => (ret = val));
    if (value === ptr.value) {
      ret = ptr;
    }

    return ret;
  }
  breadthFirstSearch() {
    let currNode = this.root;
    let list = [];
    let queue = new Queue<BinaryNode<number>>();

    queue.enqueue(currNode);
    while (queue.length > 0) {
      currNode = queue.dequeue();
      list.push(currNode.value);
      if (currNode.left) {
        queue.enqueue(currNode.left);
      }
      if (currNode.right) {
        queue.enqueue(currNode.right);
      }
    }
  }
  breadthFirstSearchR(queue: Queue<BinaryNode<number>>, list: number[] = []) {
    if (!queue.length) {
      return list;
    }
    let currNode = queue.dequeue();
    list.push(currNode.value);
    if (currNode.left) {
      queue.enqueue(currNode.left);
    }
    if (currNode.right) {
      queue.enqueue(currNode.right);
    }
    return this.breadthFirstSearchR(queue, list);
  }
  DFSInorder() {
    return this._traverseInOrder(this.root);
  }
  DFSPostorder() {
    return this._traversePostorder(this.root);
  }
  DFSPreorder() {
    return this._traversePreorder(this.root);
  }
  private _traversePreorder(
    node: BinaryNode<number> | null,
    list: number[] = []
  ) {
    if (!node) throw new Error("BinarySearchTree::DFSPreorder: Node is null");
    list.push(node.value);
    if (node.left) {
      this._traversePreorder(node.left, list);
    }
    if (node.right) {
      this._traversePreorder(node.right, list);
    }
    return list;
  }
  private _traversePostorder(
    node: BinaryNode<number> | null,
    list: number[] = []
  ) {
    if (!node) throw new Error("BinarySearchTree::DFSPreorder: Node is null");

    if (node.left) {
      this._traversePostorder(node.left, list);
    }
    if (node.right) {
      this._traversePostorder(node.right, list);
    }
    list.push(node.value);
    return list;
  }
  private _traverseInOrder(
    node: BinaryNode<number> | null,
    list: number[] = []
  ) {
    if (!node) throw new Error("BinarySearchTree::DFSInOrder: Node is null");
    if (node.left) {
      this._traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
      this._traverseInOrder(node.right, list);
    }
    return list;
  }
}
function traverse<T>(node: BinaryNode<T>): BinaryNode<T> {
  if (node === null) {
    throw new Error("parameter node is null");
  }
  return {
    value: node.value,
    left: node.left === null ? null : traverse(node.left),
    right: node.right === null ? null : traverse(node.right),
  } as BinaryNode<T>;
}
const myBST = new BinarySearchTree();

myBST.insert(9).insert(4).insert(20).insert(1).insert(6).insert(15).insert(170);
const list = myBST.DFSInorder();
console.log(list);
//     9
//  4     20
//1  6   15  170
// const ret2 = ret.lookup(2);
// console.log(ret2);
// console.log(JSON.stringify(traverse(ret.root)));
export default BinarySearchTree;
