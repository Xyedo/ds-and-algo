const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

export default function quickSort<T>(
  array: T[],
  left: number,
  right: number
): T[] {
  if (left < right) {
    const pivot = right;
    const newPivot = partition(array, pivot, left, right);
    quickSort(array, 0, newPivot - 1);
    quickSort(array, newPivot + 1, right);
  }
  return array;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);

function partition<T>(array: T[], pivot: number, left: number, right: number) {
  const pivotValue = array[pivot];
  let lPtr = left;
  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      if (i !== lPtr) {
        [array[lPtr], array[i]] = [array[i], array[lPtr]];
      }
      lPtr++;
    }
  }
  [array[lPtr], array[right]] = [array[right], array[lPtr]];
  return lPtr;
}
