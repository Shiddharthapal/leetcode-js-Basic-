/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === divisor) return 1;
  let sign = 1;
  if ((dividend < 0 && divisor >= 0) || (dividend >= 0 && divisor < 0))
    sign = -1;
  let first = Math.abs(dividend);
  if (first >= Math.pow(2, 31)) {
    if (sign === 1) first = Math.pow(2, 31) - 1;
    else first = Math.pow(2, 31);
  }
  let second = Math.abs(divisor);
  if (second === 1) return first * sign;
  let ans = 0;
  while (first >= second) {
    let shifter = 0;
    while (first > second << (shifter + 1)) {
      if (second << (shifter + 1) < 0) break;
      shifter++;
    }
    ans += 1 << shifter;
    first = first - (second << shifter);
  }
  return ans * sign;
};

console.log(divide(7, -2));
