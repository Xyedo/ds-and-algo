function addBinary(a: string, b: string): string {
  let carry = 0;
  const arrOfa = a.split("");
  let j = b.length - 1;
  for (let i = arrOfa.length - 1; i >= 0; i--) {
    debugger;
    if (carry >= 1)
      if (arrOfa[i] === "1") {
        arrOfa[i] = "0";
      } else {
        arrOfa[i] = "1";
        carry--
      }
    if (j >= 0) {
      if (b[j] === "1") {
        if (arrOfa[i] === "1") {
          carry++;
          arrOfa[i] = "0";
        } else {
          arrOfa[i] = "1";
        }
      }
      j--;
    }
    if (i === 0) {
      if (j >= 0) {
        if (carry === 0) {
          const newString = b.slice(0, j+1);
          a = newString.concat(arrOfa.join(""));
        } else {
          while (carry >= 1 && j >= 0) {
            debugger;
            arrOfa.unshift("1");
            if (b[j] === "1") {
              if (arrOfa[0] === "1") {
                arrOfa[0] = "0";
              } else {
                arrOfa[0] = "1";
                carry--
              }
            }
             else {
                 carry--
             }
            j--;
          }
          if (j >= 0) {
            const newString = b.slice(0, j+1)
            a = newString.concat(arrOfa.join(""))
          }
          else {
            while (carry >= 1) {
              arrOfa.unshift("1");
              carry--
            }
            a = arrOfa.join("")
          }


        }
      } else {
        debugger;
        while (carry >= 1) {
          arrOfa.unshift("1");
          carry--
        }
        a = arrOfa.join("")

      }
    }
  }

  return a;
}
