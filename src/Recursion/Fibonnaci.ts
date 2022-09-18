function fibonnaciIterative(index: number): number {
  let fiboNumPrev = 0;
  let fiboNumCurr = 1;
  let i = 3;
  if (index === 0) {
    return fiboNumPrev;
  }
  if (index <= 2) {
    return fiboNumCurr;
  }
  while (i <= index) {
    const temp = fiboNumCurr;
    fiboNumCurr += fiboNumPrev;
    fiboNumPrev = temp;
    i++;
  }
  return fiboNumCurr;
}

function fibonaciRecursive(index: number, fibPrev = 0, fibCurr = 1): number {
  if (index === 0) {
    return fibPrev;
  }
  if (index === 1) {
    return fibCurr;
  }
  return fibonaciRecursive(index - 1, fibCurr, fibCurr + fibPrev);
}
