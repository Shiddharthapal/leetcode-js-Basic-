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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(root===null) return false;
    let flag=false;
    var calculateSum=function(root,targetSum,sum=0){
        if(root===null) return sum;
        let lef=calculateSum(root.left,targetSum,sum+root.val);
        let rig=calculateSum(root.right,targetSum,sum+root.val);
        if(lef===targetSum && lef===rig) flag=true;
    }
    calculateSum(root,targetSum);
    return flag;
};
let data={
    val:2,
    left:null,
    right:{
        val:3,
        left:null,
        right:{
            val:4,
            left:null,
            right:{
                val:5,
                left:null,
                right:{
                    val:6,
                    left:null,
                    right:null,
                },
            },
        },
    },
}
console.log(hasPathSum(data,21));
