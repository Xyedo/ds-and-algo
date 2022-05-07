const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort<T>(array: T[]): T[] {
  let lPtr: T;
  let rPtr: T;
  let sorted= 0;
  const len = array.length;
  while (sorted < len - 1) {
    for (let i = 0; i < len - 1; i++) {
      lPtr = array[i];
      rPtr = array[i + 1];
      if (lPtr > rPtr) {
        [lPtr, rPtr] = [rPtr, lPtr];
        sorted = 0;
      } else {
        sorted++;
      }
      array[i] = lPtr;
      array[i + 1] = rPtr;
    }
  }

  return array;
}
export default bubbleSort
bubbleSort(numbers);
console.log(numbers);
