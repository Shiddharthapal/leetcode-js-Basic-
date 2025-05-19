/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length === (0 || 1)) return s;
  if (s.length === 2) return s;
  if (numRows === 1) return s;
  let arr = [];
  arr = s.split("");
  let tempString = "";
  for (let i = 0; i < numRows; i++) {
    let mid = (numRows - i) * 2 - 2;
    let last = i * 2 - 1;
    let index = i;
    let flag = 0;
    while (index < arr.length) {
      if (flag === 0) {
        tempString += arr[index];
        if (mid <= 0) {
          index = index + last + 1;
        } else {
          index += mid;
        }
        flag = 1;
      } else {
        tempString += arr[index];
        if (last <= 0) {
          index += mid;
        } else {
          index = index + last + 1;
        }
        flag = 0;
      }
    }
  }
  return tempString;
};

console.log(convert("ABCDE", 4));
