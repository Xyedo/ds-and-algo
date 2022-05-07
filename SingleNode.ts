class NodeLL<T>{
  value: T | null;
  next: NodeLL<T> | null;
  constructor(value: T, next: NodeLL<T> | null = null) {
    this.value = value;
    this.next = next;
  }

}
export default NodeLL