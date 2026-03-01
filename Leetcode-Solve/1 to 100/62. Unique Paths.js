/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m === 0 && n === 0) return 0;
  let arr = new Array(m - 1).fill(null).map(() => new Array(n - 1).fill(null));
  let temp = m - 1;
  let result = 0;

  for (let i = n - 2; i >= 0; i--) {
    let value = 0;
    for (let j = 0; j < m - 1; j++) {
      if (i === n - 2) {
        arr[j][i] = 1;
        value += 1;
        continue;
      }
      if (j !== 0) {
        temp = temp - arr[j - 1][i + 1];
      }
      arr[j][i] = temp;
      value += temp;
    }
    temp = value;
    result += value;
  }
  return result + 1;
};

console.log(uniquePaths(3, 7));
