// it beats- 6.11% (very low)
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  if ((s[0] >= "A" && s[0] <= "Z") || (s[0] >= "a" && s[0] <= "z"))
    return false;
  let len = s.length;
  if (
    (s[len - 1] >= "A" && s[len - 1] <= "Z") ||
    (s[len - 1] >= "a" && s[len - 1] <= "z") ||
    s[len - 1] === "+" ||
    s[len - 1] === "-"
  )
    return false;
  if (len == 1 && s[0] == ".") {
    return false;
  }
  let arr = Array.from(s);
  let signal = 0;
  let dot = 0;
  let e = 0;
  let val = arr.find((value) => value >= "0" && value <= "9");
  if (!val) return false;
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] >= "0" && arr[i] <= "9") ||
      arr[i] === "-" ||
      arr[i] === "+" ||
      arr[i] === "." ||
      arr[i] === "e" ||
      arr[i] === "E"
    ) {
      if (arr[i] === "." && e >= 1) {
        result = false;
      }
      if (
        (arr[i - 1] < "0" || arr[i - 1] > "9") &&
        arr[i] === "." &&
        (arr[i + 1] < "0" || arr[i + 1] > "9")
      ) {
        result = false;
      } else if (
        arr[i] === "." &&
        i === 0 &&
        (arr[i + 1] < "0" || arr[i + 1] > "9")
      ) {
        result = false;
      }

      if (arr[i] === "-" || arr[i] === "+") {
        if (arr[i - 1] === "E" || arr[i - 1] == "e") continue;
        if (i > 0 && arr[i - 1] !== "E") {
          result = false;
        } else if (i > 0 && arr[i - 1] !== "e") {
          result = false;
        } else if (arr[i + 1] === "E" || arr[i + 1] == "e") {
          result = false;
        }
      }

      if (arr[i] === "-" || arr[i] === "+") {
        signal++;
      } else if (arr[i] === ".") {
        dot++;
      } else if (arr[i] === "e" || arr[i] === "E") {
        e++;
        signal = 0;
      }
      if (signal === 2 || dot === 2 || e === 2) {
        result = false;
      }
    } else {
      result = false;
    }
  }
  return result;
};

console.log(isNumber("-."));
