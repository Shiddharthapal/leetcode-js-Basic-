/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    let n_1 = 0;
    while (number) {
      //using bitwise-& to calculate number of bit 1
      number = number & (number - 1);
      n_1++;
    }
    arr[i] = [arr[i], n_1];
  }
  //here using sort when the frequence of number is same then sort based on number value
  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  //here replace the pair value to a single value
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0];
  }
  return arr;
};

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
