import NodeLL from "../SingleNode";
class StackLinkedList<T> {
  private _top: NodeLL<T> | null;
  private _bottom: NodeLL<T> | null;
  private _length: number;
  constructor() {
    this._top = null;
    this._bottom = null;
    this._length = 0;
  }

  peek() {
    return this._top;
  }
  //newNode->this.top->2->this.bottom
  push(value: T): StackLinkedList<T> {
    const newNode = new NodeLL(value);
    if (this._length === 0) {
      this._top = newNode;
      this._bottom = newNode;
      this._length++;
      return this;
    }
    newNode.next = this._top;
    this._top = newNode;
    this._length++;
    return this;
  }
  //this.top->2->3->this.bottom
  pop(): StackLinkedList<T> {
    if (this._top) {
      this._top = this._top.next;
    }
    if (!this._top) {
      this._bottom = null;
    }
    if (this._length > 0) {
      this._length--;
    }
    return this;
  }
  isEmpty(): boolean {
    return this._length === 0 || this._top === null;
  }
}
export default StackLinkedList;
const myStack = new StackLinkedList();
console.log(myStack.push(2).push("mantap").push(true).pop().pop().pop());
