// here the time complexity is (2n)
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function (matrix, target) {
//   let flag = false;
//   let row = matrix.length;
//   let col = matrix[0].length;
//   let tempRow = 0;
//   for (let i = 0; i < row; i++) {
//     if (matrix[i][0] >= target && matrix[i][col - 1] <= target) {
//       tempRow = i;
//       break;
//     }
//   }
//   for (let i = 0; i < col; i++) {
//     if (matrix[tempRow][i] === target) {
//       flag = true;
//       break;
//     }
//   }
//   return flag;
// };

//here the time complexity is o(log(n*m))
var searchMatrix = function (matrix, target) {
  let flag = false;
  let row = matrix.length;
  let col = matrix[0].length;
  let start = 0;
  let end = row * col - 1;

  while (start <= end) {
    let mid = parseInt(start + (end - start) / 2);
    let tempRow = parseInt(mid / col);
    let tempCol = mid % col;

    if (matrix[tempRow][tempCol] === target) {
      flag = true;
      break;
    } else if (matrix[tempRow][tempCol] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return flag;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
