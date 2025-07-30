/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  let temp = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      temp.push(matrix[i][j]);
    }
  }
  let k = 0;
  for (let i = row - 1; i > -1; i--) {
    for (let j = 0; j < col; j++) {
      matrix[j][i] = temp[k];
      k++;
    }
  }

  return matrix;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
