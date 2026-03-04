// /**
//  * @param {number[][]} mat
//  * @return {number}
//  */
// var numSpecial = function (mat) {
//   let row = mat.length;
//   let col = mat[0].length;
//   let col_array = [];
//   let row_array = [];
//   for (let i = 0; i < row; i++) {
//     let sum = 0;
//     for (let j = 0; j < col; j++) {
//       sum += mat[i][j];
//     }
//     row_array.push(sum);
//   }
//   for (let i = 0; i < col; i++) {
//     let sum2 = 0;
//     for (let j = 0; j < row; j++) {
//       sum2 += mat[j][i];
//     }

//     col_array.push(sum2);
//   }

//   let spl_position = 0;
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (mat[i][j] === 1) {
//         if (col_array[j] === 1 && row_array[i] === 1) spl_position++;
//       }
//     }
//   }
//   return spl_position;
// };

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  let row = mat.length;
  let col = mat[0].length;

  let count = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 1) {
        let falg = true;
        for (let k = 0; k < col; k++) {
          if (k !== j && mat[i][k] === 1) {
            falg = false;
            break;
          }
        }

        for (let k = 0; k < row; k++) {
          if (k !== i && mat[k][j] === 1) {
            falg = false;
            break;
          }
        }

        if (falg) count++;
      }
    }
  }
  return count;
};

console.log(
  numSpecial([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]),
);
