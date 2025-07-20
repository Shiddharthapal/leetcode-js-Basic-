/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let count = 1;
    let res = "";
    let current = result[0] || "";
    for (let j = 1; j < result.length; j++) {
      if (result[j] === current) {
        count++;
      } else {
        res += count.toString() + current;
        count = 1;
        current = result[j];
      }
    }
    res += count.toString() + current;
    result = res;
  }
  return result;
};

console.log(countAndSay(6));
