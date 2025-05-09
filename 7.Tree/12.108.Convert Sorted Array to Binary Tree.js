/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var printtree=function(root,depth=0){
    if(root===null) return;
    printtree(root.left,depth+10);
    console.log(" ".repeat(depth),root.val);
    printtree(root.right,depth+10);
}
/*make a tree.anytime any part kora jai recursive use koire. jkn amar kono 
part er dorker hbe tkn ami seita toyri koire neta pari. ekta part toyri korbo
e onno part w8 korbe. recursive loop thake powerfull*/

var sortedArrayToBST = function(nums) {
    if(nums.length===0) return null;
    let first=0;
    let last=nums.length-1;
    var makeTree=function(first,last){
        if(first>last) return null;
        let mid=Math.floor((first+last)/2);
        let root={
            val:nums[mid],
            left:null,
            right:null,
        };
        root.left=makeTree(first,mid-1);
        root.right=makeTree(mid+1,last);
        return root;
    }
    return makeTree(first,last);
};
printtree(sortedArrayToBST([-10,-3,0,5,9]));