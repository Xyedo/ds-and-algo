class MaxHeap<T> {
  public length: number;
  private _data: T[];
  constructor() {
    this.length = 0;
    this._data = [];
  }

  insert(...values: T[]): number {
    for (const v of values) {
      this._data[this.length] = v;
      this._heapifyUp(this.length);
      this.length++;
    }

    return values.length;
  }
  peekTop(): T {
    return this._data[0];
  }
  delete(): T | undefined {
    if (this.length < 0) {
      return undefined;
    }
    const out = this._data[0];
    this.length--;
    if (this.length == 1) {
      this._data = [];
      return out;
    }

    this._data[0] = this._data[this.length];
    this._data.splice(this.length, 1);
    this._heapifyDown(0);

    return out;
  }

  getHeap(): T[] {
    return this._data;
  }

  private _heapifyUp(idx: number): void {
    let idxPtr = idx;
    while (idxPtr > 0) {
      const pIdx = this._parentIdx(idxPtr);
      const pV = this._data[pIdx];
      const cV = this._data[idxPtr];
      if (cV < pV) {
        return;
      }
      this._data[idxPtr] = pV;
      this._data[pIdx] = cV;
      idxPtr = pIdx;
    }
  }

  private _heapifyDown(idx: number): void {
    let idxPtr = idx;
    while (idxPtr < this.length) {
      const lChiIdx = this._leftChildIdx(idxPtr);
      const rChiIdx = this._rightChildIdx(idxPtr);
      const lChiVal = this._data[lChiIdx];
      const rChiVal = this._data[rChiIdx];
      const pV = this._data[idxPtr];

      if (lChiVal > rChiVal && pV < lChiVal) {
        this._data[idxPtr] = lChiVal;
        this._data[lChiIdx] = pV;
        idxPtr = lChiIdx;
      } else if (rChiVal > lChiVal && pV < rChiVal) {
        this._data[idxPtr] = rChiVal;
        this._data[rChiIdx] = pV;
        idxPtr = rChiIdx;
      }
    }
  }

  private _parentIdx(cIdx: number): number {
    return Math.floor((cIdx - 1) / 2);
  }
  private _rightChildIdx(pIdx: number): number {
    return pIdx * 2 + 2;
  }
  private _leftChildIdx(pIdx: number): number {
    return pIdx * 2 + 1;
  }
}

const myMaxHeap = new MaxHeap();
myMaxHeap.insert(2,7,17,3,25,1,19,36, 100);
console.log(myMaxHeap.getHeap());
