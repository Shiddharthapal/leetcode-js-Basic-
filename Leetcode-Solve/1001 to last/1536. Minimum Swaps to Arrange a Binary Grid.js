/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function (grid) {
  let row = grid.length;

  let zeros = [];
  // here findout number of zero in a row having
  for (let i = 0; i < row; i++) {
    let count = 0;
    for (let j = row - 1; j >= 0 && grid[i][j] == 0; j--) {
      count++;
    }
    zeros.push(count);
  }

  let swap = 0;
  for (let i = 0; i < row; i++) {
    let j = i;
    //calculate the number of zero a row needed
    let needed = row - i - 1;
    //from here findout the row number of zero matched with needed
    while (j < row && zeros[j] < needed) j++;

    if (j === row) return -1;
    // swap the j'th row number of zero to i'th index continously 
    while (j > i) {
      [zeros[j], zeros[j - 1]] = [zeros[j - 1], zeros[j]];
      swap++;
      j--;
    }
  }
  return swap;
};

console.log(
  minSwaps([
    [0, 0, 1],
    [1, 1, 0],
    [1, 0, 0],
  ]),
);
