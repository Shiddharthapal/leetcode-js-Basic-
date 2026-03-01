/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  let max_number = 0;
  /*to make the largest digit among the n i need to add 1 n times and that is the minimum number of sum to make n*/
  for (let i = 0; i < n.length; i++) {
    max_number = Math.max(max_number, parseInt(n[i]));
  }
  return max_number;
};

console.log(minPartitions("27346209830709182346"));
