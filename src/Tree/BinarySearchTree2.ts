import BinaryNode from "./Node";

class BinarySearchTree<T> {
  root: BinaryNode<T> | null;
  constructor(root: BinaryNode<T> | null = null) {
    this.root = root;
  }
  find(v: T): boolean {
    return this._find(v, this.root);
  }
  findNode(v: T): BinaryNode<T> | null {
    return this._findNode(v, this.root);
  }

  insert(...values: T[]): number {
    for (const value of values) {
      const newNode = new BinaryNode(value);
      if (!this.root) {
        this.root = newNode;
        continue;
      }
      let rootPtr = this.root;
      rootPtr = this._traverse(rootPtr, value);
      if (value <= rootPtr.value) {
        rootPtr.left = newNode;
      } else {
        rootPtr.right = newNode;
      }
    }
    return values.length;
  }
  insertR(...values: T[]): number {
    throw new Error("experimental do not use it!");
    for (const value of values) {
      this._insertRecursive(value, this.root);
    }
    return values.length;
  }
  private _insertRecursive(value: T, node: BinaryNode<T> | null) {
    const newNode = new BinaryNode(value);
    if (!node) {
      this.root = newNode;
      return;
    }
    if (value <= node.value) {
      if (!node.left) {
        node.left = newNode || this._insertRecursive(value, node.left);
      }
      return;
    }
    if (!node.right) {
      node.right = newNode || this._insertRecursive(value, node.right);
    }
  }

  private _find(v: T, node: BinaryNode<T> | null): boolean {
    if (!node) {
      return false;
    }
    if (node.value === v) {
      return true;
    }
    if (v > node.value) {
      return this._find(v, node.right);
    }
    return this._find(v, node.left);
  }

  private _traverse(rootPtr: BinaryNode<T>, value: T): BinaryNode<T> {
    while (rootPtr.left && rootPtr.right) {
      if (value <= rootPtr.value) {
        rootPtr = rootPtr.left;
      } else {
        rootPtr = rootPtr.right;
      }
    }
    while (value <= rootPtr.value && rootPtr.left) {
      rootPtr = rootPtr.left;
    }
    while (value > rootPtr.value && rootPtr.right) {
      rootPtr = rootPtr.right;
    }
    return rootPtr;
  }

  private _findNode(v: T, head: BinaryNode<T> | null): BinaryNode<T> | null {
    if (!head) {
      return null;
    }
    if (head.value === v) {
      return head;
    }
    if (v < head.value) {
      return this._findNode(v, head.left);
    }
    return this._findNode(v, head.right);
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
export default BinarySearchTree;
const myBst = new BinarySearchTree<number>();
myBst.insert(25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90);

console.log(JSON.stringify(traverse(myBst.root!!)));
