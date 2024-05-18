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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let number=[];
    var traverse=function(root){
      if(!root) return;
      number.push(root.val);
      traverse(root.left);
      traverse(root.right);
      return;
    }
    traverse(root);
    return number;
};
let data={
  val:1,
  left:null,
  right:null,
};
console.log(preorderTraversal(data));
