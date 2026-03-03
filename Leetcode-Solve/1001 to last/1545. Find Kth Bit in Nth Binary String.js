// /**
//  * @param {number} n
//  * @param {number} k
//  * @return {character}
//  */
// var findKthBit = function (n, k) {
//   let str = [];
//   str.push("0");

//   for (let i = 1; i < n; i++) {
//     str.push(
//       str[i - 1] +
//         "1" +
//         str[i - 1]
//           .split("")
//           .reverse()
//           .map((charr) => (charr === "0" ? (charr = "1") : (charr = "0")))
//           .join(""),
//     );
//   }
//   return str[n-1][k-1];
// };
// console.log(findKthBit(4, 11));

/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  if (n === 1) return "0";

  let len = (1 << n) - 1;
  let mid = parseInt(len / 2) + 1;

  if (k === mid) return "1";
  else if (k < mid) {
    return findKthBit(n - 1, k);
  } else {
    let findPrevMid = len - k + 1;
    let bitValue = findKthBit(n - 1, findPrevMid);
    return bitValue === "0" ? "1" : "0";
  }
};
console.log(findKthBit(4, 11));
