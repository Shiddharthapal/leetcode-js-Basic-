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
var sumNumbers = function(root) {
    let sum=0;
    let total=0;
    var recursive=function(root){
        if(root===null) return sum;
        sum=sum*10 + root.val;
        recursive(root.left);
        recursive(root.right);
        if(!root.left && !root.right) {
            total+=sum;
        }
        sum=(sum-root.val)/10;
    }
    recursive(root);
    return total;
};
let data={
    val:1,
    left:{
        val:2,
        left:null,
        right:null,
    },
    right:{
        val:5,
        left:null,
        right:null,
    },
}
console.log(sumNumbers(data));
