class MinHeap<T> {
  public length: number;
  private data: T[];
  constructor(v: T | undefined = undefined) {
    this.length = 0;
    if (v) {
      this.data = [v];
    }
  }

  insert(v: T): void {
    this.data[this.length] = v;
    this.heapifyUp(this.length);
    this.length++;
  }
  delete(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }

    const ret = this.data[0];
    this.length--;
    if (this.length === 1) {
      this.data = [];
      return ret;
    }

    this.data[0] = this.data[this.length];
    this.data.splice(this.length, 1);

    this.heapifyDown(0);

    return ret;
  }

  private heapifyDown(idx: number): void {
    if (idx >= this.length) {
      return;
    }
    const lIdx = this.leftChild(idx);
    const rIdx = this.rightChild(idx);

    if (lIdx >= this.length) {
      return;
    }

    const lV = this.data[lIdx];
    const rV = this.data[rIdx];
    const v = this.data[idx];
    if (lV > rV && v > rV) {
      this.data[idx] = rV;
      this.data[rIdx] = v;
      this.heapifyDown(rIdx);
    } else if (rV > lV && v > lV) {
      this.data[idx] = lV;
      this.data[lIdx] = v;
      this.heapifyDown(rIdx);
    }
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }

    const p = this.parent(idx);
    const parentV = this.data[p];
    const v = this.data[idx];

    if (v > parentV) {
      return;
    }
    this.data[idx] = parentV;
    this.data[p] = v;
    this.heapifyUp(p);
  }

  private parent(cIdx: number): number {
    return Math.floor((cIdx - 1) / 2);
  }
  private leftChild(pIdx: number): number {
    return 2 * pIdx + 1;
  }
  private rightChild(pIdx: number): number {
    return 2 * pIdx + 2;
  }
}
