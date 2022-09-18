const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

export default function quickSort<T>(arr: T[], lo: number, hi: number) {
  if (lo >= hi) {
    return;
  }
  const pivotIdx = partition(arr, lo, hi);
  quickSort(arr, lo, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, hi);
}

function partition<T>(arr: T[], lo: number, hi: number): number {
  const pivot = arr[hi];

  let idx = lo - 1;
  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[idx];
      arr[idx] = arr[i];
      arr[i] = tmp;
    }
  }
  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
