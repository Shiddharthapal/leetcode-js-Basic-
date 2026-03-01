/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let arrrow = new Array(10).fill(0);
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") continue;
      //console.log("=>1", parseInt(board[i][j]));
      if (arrrow[parseInt(board[i][j])] !== 0) return false;
      else {
        arrrow[parseInt(board[i][j])] = 1;
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    let arrcol = new Array(10).fill(0);
    for (let j = 0; j < 9; j++) {
      if (board[j][i] === ".") continue;
      if (arrcol[parseInt(board[j][i])] !== 0) return false;
      else {
        arrcol[parseInt(board[j][i])] = 1;
      }
    }
  }
  let row = 3,
    col = 3;
  let i = 0,
    j = 0;
  while (i < 9) {
    col = 3;
    j = 0;
    while (j < 9) {
      let arr = new Array(10).fill(0);
      for (let k = i; k < row; k++) {
        for (let m = j; m < col; m++) {
          if (board[k][m] === ".") continue;
          if (arr[parseInt(board[k][m])] !== 0) return false;
          else {
            arr[parseInt(board[k][m])] = 1;
          }
        }
      }
      j += 3;
      col += 3;
    }
    i += 3;
    row += 3;
  }
  return true;
};

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
