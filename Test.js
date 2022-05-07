//2,9,9
function incrementNumberArr(array, value) {
  let carry = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    let num = array[i];
    if (i === array.length - 1) {
      num += value;
    }
    num += carry;
    carry = 0;
    if (num > 9) {
      carry = Math.floor(num / 10);
      num = num % 10;
    }
    array[i] = num;
    if (carry === 0) {
      break;
    }
    if (i === 0 && carry !== 0) {
      while (carry > 9) {
        const ret = carry % 10;
        array.unshift(ret);
        carry = Math.floor(carry / 10);
      }
      if (carry <= 9) {
        array.unshift(carry);
      }
    }
  }
  return array;
}

console.log(incrementNumberArr([1, 2, 3]));