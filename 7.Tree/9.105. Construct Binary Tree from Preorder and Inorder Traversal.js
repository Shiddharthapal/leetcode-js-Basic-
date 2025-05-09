/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length===0) return null;
    let root={//tree toyri korar jonno node lagbe tai root node
        val:preorder[0],
        left:null,
        right:null,
    };
    let index=inorder.indexOf(preorder[0]);/*root er left & right side lagbe tai
     index dia left & right side alada koire kate nibo.
    */
    root.left=buildTree(// root er left part add kora hoyssa
        preorder.slice(1,index+1),
        inorder.slice(0,index),
    );
    root.right=buildTree(// root er right part adda kora hoyssa
        preorder.slice(index+1),
        inorder.slice(index+1),
    );
    return root;
};

let preorder=[3,9,20,15,7];
let inorder=[9,3,15,20,7];


var printtree=function(root,depth=0){
    if(root===null) return;
    printtree(root.left,depth+10);
    console.log(" ".repeat(depth),root.val);
    printtree(root.right,depth+10);
}
printtree(buildTree(preorder,inorder));

