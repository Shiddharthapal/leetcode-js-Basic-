/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  var generateSubtree = function (left, right) {
    let result = [];

    //left value of root >right value of root then return result with all value;
    if (left > right) {
      result.push(null);
      return result;
    }

    for (let val = left; val <= right; val++) {

      //create left subtree with all possibility into a loop
      for (let leftTree of generateSubtree(left, val - 1)) {

      //create right subtree with all possibility into a loop
        for (let rightTree of generateSubtree(val + 1, right)) {

        // when left, right is created then create root and also create a tree
          let root = {
            val: val,
            left: null,
            right: null,
          };
          root.left = leftTree;
          root.right = rightTree;

          result.push(root);
        }
      }
    }
    return result;
  };
  return generateSubtree(1, n);
};


console.log(generateTrees(3));
