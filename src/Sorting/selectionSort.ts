const numbers = [99, 999, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

export function selectionSort(array: number[]): number[] {
  let sorted = 0;
  const len = array.length - 1;
  while (sorted <= len) {
    let lowestIndex = sorted;
    let lowest = array[sorted];
    debugger;
    for (let i = sorted + 1; i <= len; i++) {
      if (lowest > array[i]) {
        lowestIndex = i;
      }
    }

    array[sorted] = array[lowestIndex];
    array[lowestIndex] = lowest;

    sorted++;
  }
  return array;
}
selectionSort(numbers);
console.log(numbers);
