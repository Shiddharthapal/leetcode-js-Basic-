/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let row = grid.length;
  let col = grid[0].length;

  for (let i = 1; i < row; i++) {
    grid[i][0] = grid[i][0] + grid[i - 1][0];
  }

  for (let j = 1; j < col; j++) {
    grid[0][j] = grid[0][j] + grid[0][j - 1];
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
    }
  }
  return grid[row - 1][col - 1];
};

console.log(
  minPathSum([
    [1, 3, 1, 1, 3],
    [1, 5, 1, 1, 5],
    [4, 2, 1, 4, 2],
    [1, 3, 1, 1, 3],
    [1, 5, 1, 1, 5],
  ])
);
