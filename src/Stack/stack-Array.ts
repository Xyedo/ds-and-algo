class StackArray<T> {
  private _array: T[];
  private _length: number;
  constructor() {
    this._array = [];
  }
  get length() {
    return this._array.length;
  }
  peek() {
    return this._array[this.length - 1];
  }
  //newNode->this.top->2->this.bottom
  push(value: T): StackArray<T> {
    this._array.push(value);
    return this;
  }
  //this.top->2->3->this.bottom
  pop(): StackArray<T> {
    this._array.pop();
    return this;
  }
  isEmpty(): boolean {
    return this._array.length === 0;
  }
}
export default StackArray
const myStackA = new StackArray();
console.log(myStackA.push(2).push("mantap").push(true).pop().pop());
