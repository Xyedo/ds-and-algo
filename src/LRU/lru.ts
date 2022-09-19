import DoubleNodeLL from "../DoubleNode";
class LRU<K, V> {
  private length: number;

  private lookup: Map<K, DoubleNodeLL<V>>;
  private reverseLookup: Map<DoubleNodeLL<V>, K>;
  private head: DoubleNodeLL<V> | null;
  private tail: DoubleNodeLL<V> | null;
  constructor(private capacity: number = 10) {
    this.length = 0;
    this.lookup = new Map();
    this.reverseLookup = new Map();
    this.head = null;
    this.tail = null;
  }
  update(key: K, value: V): void {
    const oldV = this.lookup.get(key);
    if (!oldV) {
      const newV = new DoubleNodeLL(value);
      this.prepend(newV);
      this.trimCache();
      this.lookup.set(key, newV);
      this.reverseLookup.set(newV, key);
      this.length++;
      return;
    }
    this.detach(oldV);
    this.prepend(oldV);
    oldV.value = value;
  }

  get(key: K): V | undefined {
    const oldV = this.lookup.get(key);
    if (!oldV) {
      return undefined;
    }
    this.detach(oldV);
    this.prepend(oldV);
  }

  private detach(node: DoubleNodeLL<V>) {
    const prevOldV = node.prev;
    const nextOldV = node.next;
    if (prevOldV) {
      prevOldV.next = nextOldV;
    }
    if (nextOldV) {
      nextOldV.prev = prevOldV;
    }
    if (this.head === node) {
      this.head = this.head.next;
    }
    if (this.tail === node) {
      this.tail = this.tail.prev;
    }
    node.prev = null;
    node.next = null;
  }
  private prepend(node: DoubleNodeLL<V>) {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    node.next = this.head;
    node.prev = null;
    this.head = node;
  }

  private trimCache(): void {
    if (this.length <= this.capacity) {
      return;
    }
    const tail = this.tail;
    this.detach(tail!);

    const key = this.reverseLookup.get(tail!);
    this.lookup.delete(key!);
    this.reverseLookup.delete(tail!);
  }
}
