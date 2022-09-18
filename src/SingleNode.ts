class NodeLL<T> {
  value: T | null;
  next: NodeLL<T> | null;
  constructor(value: T, next: NodeLL<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}
export default NodeLL;
// 1->2->3->4
// null<-1
function reverseLinkedList<T>(linkedList: NodeLL<T>): NodeLL<T> | null {
  let curr: NodeLL<T> | null = linkedList;
  let next: NodeLL<T> | null = null,
    prev: NodeLL<T> | null = null;
  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return curr;
}

console.log(
  reverseLinkedList(new NodeLL(1, new NodeLL(2, new NodeLL(3, new NodeLL(4)))))
);
