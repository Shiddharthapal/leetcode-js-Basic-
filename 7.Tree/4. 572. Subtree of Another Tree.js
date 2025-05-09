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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSame=function(p,q){
    if(p===null && q===null) return true;
    if(p===null || q===null) return false;
    if(p.val!=q.val) return false;

    return isSame(p.left,q.left) && isSame(p.right,q.right);
}
var isSubtree = function (root, subRoot) {
    if(root===null && subRoot===null) return true;
    if(root===null) return false;
    if(root.val===subRoot.val){
        let issame=isSame(root,subRoot);
        if(issame) return true;
    }
    let isleft=isSubtree(root.left,subRoot);
    let isright=isSubtree(root.right,subRoot);
    return isleft || isright;
    //return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot);
};
let root = {
    val: 1,
    left: null,
    right: {
        val: 1,
        left: null,
        right: {
            val: 1,
            left: null,
            right: {
                val: 1,
                left: null,
                right: {
                    val: 1,
                    left: null,
                    right: {
                        val: 2,
                        left: null,
                        right: null,
                    },
                },
            },
        },
    },
};

let subRoot = {
    val: 1,
    left: null,
    right: {
        val: 3,
        left: null,
        right: {
            val: 1,
            left: null,
            right: {
                val: 2,
                left: null,
                right: null,
            },
        },
    },
};

console.log(isSubtree(root, subRoot));