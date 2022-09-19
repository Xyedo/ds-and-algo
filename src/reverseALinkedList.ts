import NodeLL from "./SingleNode";
//first iter
//      curr
//null<-1 2-> 3-> 4-> 5
//prev    next
//second iter
//        curr
//null<-1 2-> 3-> 4-> 5
//      prev  next
function ReverseLL(ll: NodeLL<number>): NodeLL<number> {
  let curr = ll;
  let prev: NodeLL<number> | null = null;
  let next: NodeLL<number> | null = null;
  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr
    curr = next as NodeLL<number>;
  }
  return prev as NodeLL<number>;
}
