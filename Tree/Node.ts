class BinaryNode<T> {
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
  value: T;
  constructor(value: T, left: BinaryNode<T> | null = null, right: BinaryNode<T> | null = null) {
    this.left = left;
    this.right = right;
    this.value = value;
  }

}
export default BinaryNode