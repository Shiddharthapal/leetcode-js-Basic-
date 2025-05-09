/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    while(root){//p and q will exist in the BST. ai jonno loop use korche.
        if(root.val>p.val && root.val>q.val){
            root=root.left;/* root= , na dia sudhu root.left dela infinity hoye jabe
            ,value thik moto calculate korte perba na. tai root=root.left deta hbe 
            jate root er modda value ta assign hoyte perba.
            */
        }else if(root.val<p.val && root.val<q.val){
            root=root.right;
        }else{
            break;
        }
    }
    return root;
};
let data = {
    val: 6,
    left: {
        val: 2,
        left: {
            val: 0,
            left: null,
            right: null,
        },
        right: {
            val: 4,
            left: {
                val: 3,
                left: null,
                right: null,
            },
            right: {
                val: 5,
                left: null,
                right: null,
            },
        },
    },
    right: {
        val: 8,
        left: {
            val: 7,
            left: null,
            right: null,
        },
        right: {
            val: 9,
            left: null,
            right: null,
        },
    },
};
let p={
    val:2,
    left:null,
    right:null,
}
let q={
    val:4,
    left:null,
    right:null,
}

let result=lowestCommonAncestor(data,p,q);

var printtree=function(node,depth=0){
    if(node===null) return ;
    printtree(node.right,depth+10);
    console.log(" ".repeat(depth),node.val);
    printtree(node.left,depth+10);
}
printtree(result);
