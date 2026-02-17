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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  if (!root) return root;
  let firstWrong = null;
  let secondWrong = null;
  //create a temp TreeNode
  let prev = new TreeNode(-Infinity);

  //recursive function that travarse the tree
  function inOrderTraversal(node) {
    if (!node) return;

    inOrderTraversal(node.left);

    //check the previous value> current value with fristWrong value===null then insert the previous value into fristWrong
    if (prev.val > node.val && firstWrong === null) {
      firstWrong = prev;
    }

    //previous value> current value with fristWrong value!==null then insert the current value into secondWrong
    if (prev.val > node.val && firstWrong !== null) {
      secondWrong = node;
    }

    //update the previous
    prev = node;
    inOrderTraversal(node.right);
  }
  inOrderTraversal(root);
  let temp = firstWrong.val;
  firstWrong.val = secondWrong.val;
  secondWrong.val = temp;
};

let data = {
  val: 3,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 4,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: null,
  },
};
console.log(recoverTree(data));
