/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let row = obstacleGrid.length;
  let col = obstacleGrid[0].length;

  if (!obstacleGrid && obstacleGrid[0][0] === 1) return 0;

  let array = new Array(col).fill(0);
  array[0] = 1;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (obstacleGrid[i][j] === 1) {
        array[j] = 0;
      } else {
        if (j > 0) {
          array[j] += array[j - 1];
        }
      }
    }
  }
  return array[col - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0],
    [1, 0],
  ])
);
