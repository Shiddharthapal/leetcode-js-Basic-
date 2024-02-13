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
var maxPathSum = function(root) {
    let max=Number.MIN_SAFE_INTEGER;
    var calculatePath=function(root){
        if(root===null) return 0;
        let leftvalue=Math.max(0,calculatePath(root.left));
        let rightvalue=Math.max(0,calculatePath(root.right));
        max=Math.max(max,(leftvalue+rightvalue)+root.val);
        return Math.max(leftvalue,rightvalue)+root.val;
    }
    calculatePath(root);
    return max;
};
let data={
    val:-10,
    left:{
        val:9,
        left:null,
        right:null,
    },
    right:{
        val:20,
        left:{
            val:15,
            left:null,
            right:null,
        },
        right:{
            val:7,
            left:null,
            right:null,
        },
    },
}
console.log(maxPathSum(data));
