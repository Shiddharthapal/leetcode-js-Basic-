/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function (matrix) {
  let arr = [];
  let row = matrix.length;
  let col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        arr.push([i, j]);
      }
    }
  }

  arr.forEach((value) => {
    let tempRow = value[0];
    let tempCol = value[1];
    for (let i = 0; i < col; i++) {
      matrix[tempRow][i] = 0;
    }
    for (let i = 0; i < row; i++) {
      matrix[i][tempCol] = 0;
    }
  });
  return matrix;
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
