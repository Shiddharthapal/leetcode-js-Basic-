/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  //convert the decimal to binary
  let binay = n.toString(2);

  //flip the binay using replace
  let flip_bit = binay.replace(/[01]/g, (binay) => (binay === "0" ? "1" : "0"));

  //convert the binary to decimal
  let decimal = parseInt(flip_bit, 2);
  return decimal;
};
console.log(bitwiseComplement(5));
