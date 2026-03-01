/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let a_array = a.length - 1;
  let b_array = b.length - 1;
  let result = "";
  let carry = 0;
  while (a_array >= 0 || b_array >= 0 || carry) {
    let sum = carry;
    if (a_array >= 0) sum += parseInt(a[a_array]);
    if (b_array >= 0) sum += parseInt(b[b_array]);
    result = (sum % 2).toString() + result;
    carry = Math.floor(sum / 2);
    a_array--;
    b_array--;
  }
  return result;
};
console.log(addBinary("11", "1"));
