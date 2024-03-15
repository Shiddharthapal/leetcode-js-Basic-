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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root===null) return null;
    let prev=null;
    var makeLinklist=function(root){
        if(!root) return;
        if(prev){
            prev.left=null;
            prev.right=root;
        }
        prev=root;
        let r=root.right;
        makeLinklist(root.left);
        makeLinklist(r);
        return root;
    } 
    return makeLinklist(root);
};
let data={
    val:1,
    left:{
        val:2,
        left:{
            val:3,
            left:null,
            right:null,
        },
        right:{
            val:4,
            left:null,
            right:null,
        },
    },
    right:{
        val:5,
        left:null,
        right:{
            val:6,
            left:null,
            right:null,
        },
    },
}
console.log(flatten(data));
