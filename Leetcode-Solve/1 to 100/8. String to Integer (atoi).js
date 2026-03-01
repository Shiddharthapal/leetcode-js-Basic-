/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let tempArray = [];
  tempArray = s.split("");
  let sign = "+";
  let firstSign = false;
  let firstSpace = false;
  let firstDigit = false;
  let temp = "";
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i] === "-" || tempArray[i] === "+") {
      if (!firstSign) {
        sign = tempArray[i];
        firstSign = true;
        firstSpace = true;
        continue;
      } else {
        break;
      }
    }
    if (tempArray[i] >= "0" && tempArray[i] <= "9") {
      if (tempArray[i] === "0" && !firstDigit) {
        firstSpace = true;
        firstSign = true;
        continue;
      }
      temp += tempArray[i];
      firstSpace = true;
      firstDigit = true;
      firstSign = true;
    } else {
      if (tempArray[i] != 0 && tempArray[i] != " ") break;
      if (tempArray[i] === " " && firstSpace) break;
    }
  }
  if (temp.length === 0) temp = "0";
  let finalDigit = parseInt(temp);
  if (firstSign) {
    if (sign === "-" && tempArray.length > 1) finalDigit = finalDigit * -1;
  }
  if (finalDigit <= -Math.pow(2, 31)) return -Math.pow(2, 31);
  else if (finalDigit >= Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  return finalDigit;
};
console.log(myAtoi("123-"));
