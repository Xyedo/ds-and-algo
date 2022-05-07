import NodeLL from "../SingleNode";
class Queue<T> {
  private _first: NodeLL<T> | null;
  private _last: NodeLL<T> | null;
  private _length: number;
  constructor() {
    this._first = null;
    this._last = null;
    this._length = 0;
  }
  get length(): number {
    return this._length
  }
  peek(): T | null {
    return this._first ? this._first.value : null;
  }
  enqueue(value: T): void {
    const newNode = new NodeLL(value)
    if (this._length === 0) {
      this._first = this._last = newNode;
      this._length++;
      return;
    }
    //this.head -> 2->3->4-> this.last
    if (this._last) {
      this._last.next = newNode;
      this._last = newNode;
      this._length++;
      return;
    }
  }
  dequeue(): T {
    if (this._first?.next === null) {
      const temp = this._first.value;
      this._first = this._last = null;
      this._length = 0;
      return temp;
    }
    if(this._first === this._last) {
      this._last = null;
    }
    if (this._first) {
      const temp = this._first.value
      this._first = this._first.next
      this._length--;
      return temp;
    }
    throw new Error("Stack dequeue: returning null");
  }
  isEmpty(): boolean {
    return this.peek() === null;
  }

}
export default Queue;
const myQueue = new Queue()
console.log(
  myQueue.enqueue(1)
)
console.log(myQueue.enqueue(2))
console.log(myQueue.dequeue())
console.log(myQueue.peek())
console.log(myQueue.isEmpty())
console.log(myQueue.dequeue())
console.log(myQueue.isEmpty())
