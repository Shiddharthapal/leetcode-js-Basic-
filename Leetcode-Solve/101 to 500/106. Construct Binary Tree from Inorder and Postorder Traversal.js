/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

//use the buildTree function recursively using function call.
var buildTree = function (inorder, postorder) {
  if (postorder.length === 0) return null;

  //create node in every recursion
  let root = {
    val: postorder[postorder.length - 1],
    left: null,
    right: null,
  };

  //findout the index of postorder root in inorder array
  let index = inorder.indexOf(postorder[postorder.length - 1]);

  //build the left subtree of the root using partitioning with recursive approach
  root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));

  //build the right subtree of the root using partitioning with recursive approach
  root.right = buildTree(
    inorder.slice(index + 1),
    postorder.slice(index, postorder.length - 1),
  );

  return root;
};

let inorder = [1, 2, 3, 4, 5, 6, 7];
let postorder = [1, 3, 2, 5, 7, 6, 4];

/* Rule of function is function return from where function is called. doesn't matter which function call from where
. In js i can use any function recursivly with function call approach. Function runs based on function call approach.
*/

console.log(buildTree(inorder, postorder));
