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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root===null) return null;
    let bam=root.left;
    let dan=root.right;
    let flag=true;
    var compareTree=function(bam,dan){
        if(bam===null && dan===null) return;
        if(bam===null || dan===null) {
            flag=false;
            return;
        }
        if(bam.val!==dan.val){
            flag=false;
            return;
        }
        compareTree(bam.left,dan.right);
        compareTree(bam.right,dan.left);
    }
    compareTree(bam,dan);
    return flag;
};
let data1 = {
    val: 1,
    left:{
        val:2,
        left:null,
        right:{
            val:3,
            left:null,
            right:null,

        }
    },
    right:{
        val: 2,
        left:null,
        right:{
            val:3,
            left:null,
            right:null,

        },
    },
    
};


console.log(isSymmetric(data1));
