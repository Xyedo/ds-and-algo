const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//1 2 7 9 ----> 5 0
export function insertionSort<T>(array: T[]): T[] {
  const sortedArr: T[] = [];
  sortedArr.push(array[0]);
  for (let i = 1; i < array.length; i++) {
    let lPtr = 0;
    let rPtr = sortedArr.length - 1;
    while (lPtr <= rPtr) {
      const mid = Math.floor((rPtr + lPtr) / 2);
      if (array[i] === sortedArr[mid]) {
        lPtr = mid;
        break;
      } else if (array[i] < sortedArr[mid]) {
        rPtr = mid - 1;
      } else {
        lPtr = mid + 1;
      }
    }
    sortedArr.splice(lPtr, 0, array[i]);
  }
  return sortedArr;
}

const sortedArr = insertionSort(numbers);
console.log(sortedArr);

export function insertionSortLecture<T>(array: T[]): T[] {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
  return array;
}

export default function insertionSort2<T>(array: T[]): T[] {
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (array[j] > array[i] && array[j - 1] < array[i]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
  return array;
}


