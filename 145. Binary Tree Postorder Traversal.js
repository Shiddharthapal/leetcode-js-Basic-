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
var postorderTraversal = function(root) {
    let number=[];
    var traverse=function(root){
      if(!root) return;
      traverse(root.left);
      traverse(root.right);
      number.push(root.val);
      return;
    }
    traverse(root);
    return number;
};
let data={
  val:1,
  left:null,
  right:{
    val:2,
    left:{
      val:3,
      left:null,
      right:null,
    },
    right:null,
  },
};
console.log(postorderTraversal(data));
