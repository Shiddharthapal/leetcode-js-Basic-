/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sign = true;
  if (x < 0) sign = false;
  if (x >= 0 && x < 10) return x;
  let string = x.toString();
  let tempArray = [];
  tempArray = string.split("");
  string = "";
  for (let i = tempArray.length - 1; i >= 0; i--) {
    string += tempArray[i];
  }
  let finalNumber = parseInt(string);
  if (finalNumber > Math.pow(2, 31) || finalNumber < -Math.pow(2 ^ 31))
    return 0;
  if (!sign) return finalNumber * -1;
  return finalNumber;
};

console.log(reverse(-2147483648));
