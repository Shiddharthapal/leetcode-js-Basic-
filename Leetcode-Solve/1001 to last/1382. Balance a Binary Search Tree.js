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
 * @return {TreeNode}
 */

var print = function (node) {
  while (node) {}
};

var balanceBST = function (root) {
  if (!root) return root;
  let inorder = [];
  let preorder = [];

  function traversal(node) {
    if (!node) return node;
    traversal(node.left);
    inorder.push(node.val);
    traversal(node.right);
  }
  traversal(root);

  function makeTree(preOrder,mid, inOrder) {
    if (preOrder.length === 0 && inOrder.length==0) return null;
    let root = {
      val: inorder[mid],
      left: null,
      right: null,
    };

    

    root.left = makeTree(preOrder.slice(0,  Math.floor(mid/2)-1),Math.floor(mid/2), inOrder.slice(Math.floor(mid/2)+1));

    root.right = makeTree(preOrder.slice(mid,  mid+Math.floor(mid/2)-1), mid+Math.floor(mid/2), inOrder.slice(mid+Math.floor(mid/2)+1));

    return root;
  }
  let mid=Math.floor(inorder.length/2);
  return makeTree(inorder.slice(0,mid-1),mid, inorder.slice(mid+1));
};

let data = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  },
};

console.log(balanceBST(data));
