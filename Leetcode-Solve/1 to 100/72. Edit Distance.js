// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {number}
//  */
// var minDistance = function (word1, word2) {
//   let result = Number.MAX_SAFE_INTEGER;
//   let arr = [];
//   const dptraverse = (first, second, temp, newOne) => {
//     if (second >= word2.length && first >= word1.length) {
//       result = Math.min(temp, result);
//       console.log("🧞‍♂️  result --->", result);
//       return;
//     } else if (first >= word1.length) {
//       let tempResult = temp + newOne + word2.length - second;
//       result = Math.min(tempResult, result);
//       return;
//     } else if (second >= word2.length) {
//       let tempResult = temp + newOne + word1.length - first;
//       result = Math.min(tempResult, result);
//       return;
//     }
//     temp += newOne;
//     console.log("🧞‍♂️  temp --->", temp);

//     if (word1[first] === word2[second]) {
//       dptraverse((first += 1), (second += 1), temp, 0);
//     } else {
//       dptraverse((first += 1), (second += 1), temp, 1);

//       dptraverse(first, (second += 1), temp, 1);

//       dptraverse((first += 1), second, temp, 1);
//     }
//   };
//   dptraverse(0, 0, 0, 0);
//   return result;
// };

// console.log(minDistance("intention", "execution"));
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let firstlen = word1.length;
  let secondlen = word2.length;
  let arr2d = new Array(firstlen + 1)
    .fill(null)
    .map(() => new Array(secondlen + 1).fill(null));

  for (let i = 0; i <= firstlen; i++) {
    arr2d[i][0] = i;
  }

  for (let i = 1; i <= secondlen; i++) {
    arr2d[0][i] = i;
  }

  for (let i = 0; i < firstlen; i++) {
    for (let j = 0; j < secondlen; j++) {
      if (word1[i] === word2[j]) {
        arr2d[i + 1][j + 1] = arr2d[i][j];
      } else {
        let a = arr2d[i][j];
        let down = arr2d[i][j + 1];
        let up = arr2d[i + 1][j];
        arr2d[i + 1][j + 1] =
          a < down ? (a < up ? a : up) : down < up ? down : up;

        arr2d[i + 1][j + 1] = arr2d[i + 1][j + 1] + 1;
      }
    }
  }
  return arr2d[firstlen][secondlen];
};

console.log(minDistance("horse", "ros"));
