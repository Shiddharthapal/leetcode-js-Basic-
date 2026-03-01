/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  strs.sort((a, b) => a.length - b.length);
  let last = strs[0].length;
  let i = 1;
  let first = strs[0].slice(0, last);
  while (i < strs.length && last > 0) {
    let temp = strs[i].slice(0, last);
    if (first === temp) {
      i++;
    } else {
      last--;
      first = strs[0].slice(0, last);
      i = 1;
    }
  }
  if (!first) return "";
  else return first;
};

console.log(longestCommonPrefix(["dog", "flow", "cat"]));
