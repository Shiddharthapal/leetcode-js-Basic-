/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  if (s.length === 1) return 0;

  let sum = 0;
  sum = BigInt("0b" + s);

  let step_counter = 0;
  while (sum !== 1n) {
    if (sum % 2n == 0) {
      sum = sum / 2n;
    } else {
      sum += 1n;
    }
    step_counter++;
  }

  return step_counter;
};

console.log(
  numSteps("1111011110000011100000110001011011110010111001010111110001"),
);
