/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function (s1, s2) {
  let n = s1.length;
  let freq = Array(52).fill(0);
  for (let i = 0; i < n; i++) {
    let position = (i & 1) * 26;

    freq[s1[i].charCodeAt(0) - 97 + position]++;
    freq[s2[i].charCodeAt(0) - 97 + position]--;
  }

  return freq.every((val) => val === 0);
};
console.log(
  "checkStrings ==> ",
  checkStrings("hoehzlxqeuxzxo", "xlhezzxxeouohq"),
);
