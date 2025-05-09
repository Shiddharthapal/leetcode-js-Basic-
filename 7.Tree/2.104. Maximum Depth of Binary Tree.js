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
var countLevel=function(node,depth){
    if(node===null) return depth;// value return hoba
    let leftDep=countLevel(node.left,depth++);//big point,left side
    let rightDep=countLevel(node.right,depth++);//big point,right side
    return Math.max(leftDep,rightDep);
}
var maxDepth=function(root){
    if(root===null) return 0;
    let level=0;
    level=countLevel(root,level);//big point
    return level;
}
let data={
    val:1,
    left:null,
    right:{
        val:5,
        left:{
            val:6,
            left:null,
            right:null,
        },
        right:{
            val:7,
            left:null,
            right:{
                val:8,
                left:null,
                right:null,
            },
        },
    },
}
console.log(maxDepth(data));