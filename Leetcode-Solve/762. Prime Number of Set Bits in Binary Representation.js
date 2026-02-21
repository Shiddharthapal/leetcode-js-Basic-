/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  let primeNumber = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
  let result_count = 0;
 //findout the binary number 1 in a digit
  function findBinaryNumber(number) {
    let countOFBinary_1 = 0;

    while (number) {
        //here i am using bitwise and that count bit  of value 1
        number&=number-1;
        countOFBinary_1++;
      
    }
    return countOFBinary_1;
  }
  for (let i = left; i <= right; i++) {
    let value = findBinaryNumber(i);
    //findout the prime number of the binary number 1's fequency
    if (primeNumber.has(value)) result_count++;
  }

  return result_count;
};

console.log(countPrimeSetBits(10, 15));
