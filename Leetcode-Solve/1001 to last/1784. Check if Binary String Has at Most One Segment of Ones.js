/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  if (s[0] === 0) return false;
  let hasone = false;
  let haszero = false;

  for (let i = 0; i < s.length; i++) {
    // if  found first "1" and second "0 " and the find 1 return false
    if (hasone && haszero && s[i] === "1") {
      return false;
    }

    // is find one then change the state
    if (s[i] === "1") hasone = true;
    // is find  then zero, so change the state
    if (s[i] === "0" && s[i - 1] == "1") haszero = true;
  }
  return true;
};

console.log(checkOnesSegment("1000111"));
