import NodeLL from "../SingleNode";
class SingleLinkedList<T> {
  public head: NodeLL<T> | null;
  public tail: NodeLL<T> | null;
  private _length: number;
  constructor(value: T) {
    this.head = this.tail = new NodeLL(value);
    this._length = 1;
  }
  public get length(): number {
    return this._length;
  }
  //this.head->2->3->this.tail
  append(value: T): SingleLinkedList<T> {
    const newNode = new NodeLL(value);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this._length++;
    return this;
  }
  prepend(value: T): SingleLinkedList<T> {
    const newNode = new NodeLL(value, this.head);
    this.head = newNode;
    this._length++;
    return this;
  }
  printList(): T[] {
    const array: T[] = [];
    let ptr = this.head as NodeLL<T> | null;
    while (ptr !== null && ptr.value) {
      array.push(ptr.value);
      ptr = ptr.next || null;
    }
    return array;
  }
  //this.head->2->3->this.tail
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
      const newNode = new NodeLL(value, pointer.next);
      pointer.next = newNode;
    }
    this._length++;
    return this;
  }
  //this.head->2->3->4->this.tail-> null
  remove(index: number): SingleLinkedList<T> {
    if (index >= this._length) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      this.head = this.head?.next || null;
      this._length--;
      return this;
    }

    const pointer = this._traverseLinkedList(index - 1);
    if (pointer?.next) {
      pointer.next = pointer.next.next;
    }

    this._length--;
    return this;
  }

  private _traverseLinkedList(index: number): NodeLL<T> | null {
    let i = 1;
    let pointer = this.head as NodeLL<T> | null;
    while (i < index) {
      pointer = pointer ? pointer.next : null;
      i++;
    }
    return pointer;
  }
}
export default SingleLinkedList;
const myLinkedList = new SingleLinkedList(10);
console.log(
  myLinkedList
    .append(5)
    .append(16)
    .prepend(1)
    .insert(myLinkedList.length, 10)
    .printList()
);
