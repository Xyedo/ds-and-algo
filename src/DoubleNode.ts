class DoubleNodeLL<T> {
  value: T | null;
  next: DoubleNodeLL<T> | null;
  prev: DoubleNodeLL<T> | null;
  constructor(
    value: T,
    next: DoubleNodeLL<T> | null = null,
    prev: DoubleNodeLL<T> | null = null
  ) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
export default DoubleNodeLL