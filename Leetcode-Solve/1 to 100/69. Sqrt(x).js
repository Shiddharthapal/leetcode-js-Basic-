/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 1) return 1;
  let first = 0,
    last = x;
  let result = 0;
  let total, div, newnum;
  while (1) {
    if (first + 1 === last) {
      result = first;
      break;
    }
    total = first + last;
    div = parseInt(total / 2);
    newnum = div * div;
    if (newnum === x) {
      result = div;
      break;
    }
    if (newnum > x) last = div;
    if (newnum < x) first = div;
  }
  return result;
};

console.log(mySqrt(26));
