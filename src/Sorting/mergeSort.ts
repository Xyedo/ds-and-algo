const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

export default function mergeSort<T>(array: T[]): T[] {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);

  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge<T>(left: T[], right: T[]): T[] {
  let lPtr = 0;
  let rPtr = 0;
  const temp: T[] = [];
  while (lPtr < left.length && rPtr < right.length) {
    debugger;
    if (left[lPtr] > right[rPtr]) {
      temp.push(right[rPtr]);
      rPtr++;
    } else {
      temp.push(left[lPtr]);
      lPtr++;
    }
  }
  while (lPtr < left.length) {
    temp.push(left[lPtr]);
    lPtr++;
  }
  while (rPtr < right.length) {
    temp.push(right[rPtr]);
    rPtr++;
  }
  return temp;
}

const answer = mergeSort(numbers);
console.log(answer);
