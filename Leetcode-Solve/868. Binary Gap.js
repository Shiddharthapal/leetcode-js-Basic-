/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  let prev_index = -1;
  let current = -1;
  let distance = 0;
  let number = n;
  while (number) {
    current++;
    //findout bit of the digit
    let binary = number % 2;
    number = parseInt(number / 2);

    //use the method that is when the bit is one then calculate then distance
    if (binary === 1) {
        //the bit is not the first then calculate the distance
      if (prev_index != -1) {
        distance = Math.max(distance, current - prev_index);
      }
      prev_index = current;
    }
  }
  return distance;
};
console.log(binaryGap(9));
