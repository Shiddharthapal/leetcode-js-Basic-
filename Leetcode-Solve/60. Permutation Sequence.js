/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

var getPermutation = function (n, k) {
  if (n === 1 && k === 1) return "1";
  let temp = [];
  for (let i = 1; i <= n; i++) {
    temp.push(i);
  }
  const factorial = function (n) {
    let result = 1;
    while (n) {
      result *= n;
      n--;
    }
    return result;
  };
  let result = "";
  let perCombination = 0;
  perCombination = parseInt(factorial(n) / n);
  const permutation = function (start, find, perCombination) {
    if (start === 0) return;
    let first = parseInt(find / perCombination);
    let digit = temp.splice(first, 1);
    result = result + String(digit);
    find = find % perCombination;

    perCombination = parseInt(perCombination / (start - 1));

    permutation(start - 1, find, perCombination);
  };
  permutation(n, k - 1, perCombination);
  return result;
};

console.log(getPermutation(3, 3));

console.log(0 % 1);
