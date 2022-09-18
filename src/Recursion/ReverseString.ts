function reverseStringIterative(str: string): string {
  if (str.length <= 1) {
    return str;
  }
  const reversedStr = str.split("");
  let lPtr = 0;
  let rPtr = str.length - 1;
  while (lPtr < rPtr) {
    [reversedStr[lPtr], reversedStr[rPtr]] = [
      reversedStr[rPtr],
      reversedStr[lPtr],
    ];
    lPtr++;
    rPtr--;
  }
  return reversedStr.join("");
}

function reverseString(str: string, reverseStr: string[] = []): string {
  if (str.length <= 1) {
    return str;
  }
  const arrStr = str.split("");
  return reverseStringRecursive(arrStr).join("");
}

function reverseStringRecursive(
  str: string[],
  reverseStr: string[] = []
): string[] {
  if (str.length < 1) {
    return reverseStr;
  }
  reverseStr.push(str.pop()!);


  return reverseStringRecursive(str, reverseStr);
}

console.log(reverseStringIterative("Halo semuanya!"))

console.log(reverseString("Halo Semuanya!"))
