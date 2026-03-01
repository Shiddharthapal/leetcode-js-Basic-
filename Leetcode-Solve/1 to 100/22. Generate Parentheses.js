/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];
  const dfs = (openP, closeP, s) => {
    if (openP === closeP && openP + closeP === n * 2) {
      result.push(s);
      return;
    }

    if (openP < n) {
      dfs(openP + 1, closeP, s + "(");
    }
    if (closeP < openP) {
      dfs(openP, closeP + 1, s + ")");
    }
  };
  dfs(0, 0, "");
  return result;
};

console.log(generateParenthesis(3));
