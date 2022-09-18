import BinaryNode from "./Tree/Node";
function compareBinaryTree<T>(p: BinaryNode<T>, q: BinaryNode<T>): boolean {
  const q1: (BinaryNode<T> | null)[] = [p];
  const q2: (BinaryNode<T> | null)[] = [q];
  while (q1.length !== 0 && q2.length !== 0) {
    const tree1 = q1.shift();
    const tree2 = q2.shift();
    if (tree1 === null && tree2 === null) {
      continue;
    }
    if (tree1 === null || tree2 === null) {
      return false;
    }
    if (tree1?.value !== tree2?.value) {
      return false;
    }
    q1.unshift(p.left);
    q2.unshift(q.left);
    q1.unshift(p.right);
    q2.unshift(q.right);
  }
  return true;
}
