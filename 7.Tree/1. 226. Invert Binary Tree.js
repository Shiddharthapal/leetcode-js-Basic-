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
 * @return {TreeNode}
 */
var printtree=(root,space=0,count=10)=>{
    if(root===null) return;
    space+=count;
    printtree(root.left,space);
    console.log(" ".repeat(space-count)+root.val);
    printtree(root.right,space);
}
var inverttree=(root)=>{
    if(root===null) return root;
    inverttree(root.left);
    inverttree(root.right);
    let temp=root.left;
    root.left=root.right;
    root.right=temp;
    return root;
}
/* var invertTree = function(root) { //better
    if(!root) return root;
    var invert=function(root){
    if(!root) return;
    invert(root.left);
    invert(root.right);

    let temp=root.left;
    root.left=root.right;
    root.right=temp;

    return root;
    }
    return invert(root);
}*/
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
        left:{
            val:6,
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
printtree(data);
printtree(inverttree(data));