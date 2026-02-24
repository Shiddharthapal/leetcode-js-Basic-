/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  let binary = [];
  let temp = [];
  let result = 0;
  function traverseTree(node) {
    if (!node) return;
    temp.push(node.val);
    traverseTree(node.left);
    traverseTree(node.right);
    if (node?.left === null && node?.right === null) {
      binary.push([...temp]);
    }
    temp.pop();
  }
  traverseTree(root, 0);
  console.log(binary);

  binary.forEach((value) => {
    let power = 0;
    let sum = 0;
    for (let i = value.length - 1; i >= 0; i--) {
      sum = sum + value[i] * 2 ** power;
      power++;
    }
    result += sum;
  });
  return result;
};

let data = {
  val: 0,
  left: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 0,
    left: {
      val: 0,
      left: null,
      right: {
        val: 1,
        left: null,
        right: {
          val: 1,
          left: null,
          right: null,
        },
      },
    },
    right: {
      val: 0,
      left: null,
      right: null,
    },
  },
};
console.log(sumRootToLeaf(data));
