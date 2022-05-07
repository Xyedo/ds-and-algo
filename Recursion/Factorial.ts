function findFactorialRecursive(num:number, total=1):number {
  if (num <=1) {
    return 1
  }
  
  return findFactorialRecursive(num-1, total*num)
}

function findFactorialIterative(num:number) {
  let answer = num;
  while(num >1) {
    num--;
    answer *=num;

  }
  return answer
}