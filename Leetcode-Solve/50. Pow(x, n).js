/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let result = Math.pow(x, n);
  let final = parseFloat(result.toFixed(5));
  return final;
};

console.log(myPow(2.1, 3));
