/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function (s) {
  let n = s.length;
  let new_string = s + s;
  let missing0 = 0;
  let missing1 = 0;
  let ans = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n * 2; i++) {
    let expected_l = i % 2 === 0 ? "0" : "1";
    if (new_string[i] !== expected_l) {
      missing0++;
    }

    if (i >= n) {
      let left = i - n;
      let expt = left % 2 == 0 ? "0" : "1";
      if (new_string[left] !== expt) missing0--;
    }

    if (i >= n - 1) {
      missing1 = n - missing0;
      ans = Math.min(ans, Math.min(missing0, missing1));
    }
  }

  return ans;
};

console.log(minFlips("01001001101"));
