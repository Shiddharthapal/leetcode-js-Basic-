/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  if (digits.length === 1 && (digits[0] === "1" || digits[0] === "0"))
    return [];
  let arr = [];
  arr[2] = ["a", "b", "c"];
  arr[3] = ["d", "e", "f"];
  arr[4] = ["g", "h", "i"];
  arr[5] = ["j", "k", "l"];
  arr[6] = ["m", "n", "o"];
  arr[7] = ["p", "q", "r", "s"];
  arr[8] = ["t", "u", "v"];
  arr[9] = ["w", "x", "y", "z"];

  let array = [];
  let flag = null;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === "1" || digits[i] === "0") {
      continue;
    } else {
      if (!flag) {
        array = [...arr[Number.parseInt(digits[i])]];
        flag = 1;
      } else {
        let temp = Number.parseInt(digits[i]);
        let tempArray = [];
        for (let j = 0; j < array.length; j++) {
          for (let k = 0; k < arr[temp].length; k++) {
            tempArray.push(array[j] + arr[temp][k]);
          }
        }
        array = [...tempArray];
      }
    }
  }
  return array;
};

console.log(letterCombinations("2101013"));
