import DoubleNodeLL from "../DoubleNode";
class DoubleLinkedList<T> {
  public head: DoubleNodeLL<T> | null;
  public tail: DoubleNodeLL<T> | null;
  private _length: number;
  constructor(value: T) {
    this.head = this.tail = new DoubleNodeLL(value);
    this._length = 1;
  }
  public get length(): number {
    return this._length;
  }
  //this.head<->2<->3<->this.tail
  append(value: T): DoubleLinkedList<T> {
    const newNode = new DoubleNodeLL(value, null, this.tail);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this._length++;
    return this;
  }
  //newNode this.head<->2<->3<->this.tail
  prepend(value: T): DoubleLinkedList<T> {
    const newNode = new DoubleNodeLL(value, this.head);
    this.head.prev = newNode;
    this.head = newNode;
    this._length++;
    return this;
  }
  printList(): T[] {
    const array: T[] = [];
    let ptr = this.head as DoubleNodeLL<T> | null;
    while (ptr !== null && ptr.value) {
      array.push(ptr.value);
      ptr = ptr.next || null;
    }
    return array;
  }
  //this.head<->2<- newNode->3<->this.tail
  insert(index: number, value: T) {
    if (index === 0) {
      this.prepend(value);
      return this;
    }
    if (index > this._length) {
      throw new Error("Index out of bounds");
    }
    const pointer = this._traverseLinkedList(index);
    if (pointer) {
      const newNode = new DoubleNodeLL(value, pointer.next, pointer);
      pointer.next = newNode;
      pointer.next.prev = newNode;
    }
    this._length++;
    return this;
  }
  //this.head<->2<->3<->4<->this.tail-> null
  //this.head<->2<->3<->4<->this.tail-> null
  remove(index: number): DoubleLinkedList<T> {
    if (index >= this._length) {
      throw new Error("Index out of bounds");
    }
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this._length = 0;
      return this;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this._length--;
      return this;
    }

    const pointer = this._traverseLinkedList(index);
    if (pointer?.next) {
      pointer.next.next.prev = pointer;
      pointer.next = pointer.next.next;
    }
    this._length--;
    return this;
  }

  private _traverseLinkedList(index: number): DoubleNodeLL<T> | null {
    let i = 1;
    let pointer = this.head as DoubleNodeLL<T> | null;
    while (i < index) {
      pointer = pointer ? pointer.next : null;
      i++;
    }
    return pointer;
  }
}
export default DoubleLinkedList;
const myLinkedListD = new DoubleLinkedList(10);
console.log(
  myLinkedListD
    .append(5)
    .append(16)
    .prepend(1)
    .insert(myLinkedListD.length, 10)
    .printList()
);
