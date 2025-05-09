/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    let flag=true;
    var compareTree=function(l,r){// function ta upore dela hbe na cz flag er
        if(l===null && r===null) return;// value update hbe na.sei jonno function 
        if(l===null || r===null){//flag declare hower pore deta hbe
            flag=false;
            return;
        }
        if(l.val!==r.val){
            flag=false;
            return;
        }
        compareTree(l.left,r.left);
        compareTree(l.right,r.right);
    }
    compareTree(p,q);
    return flag;
}
let data1 = {
    val: 1,
    left: null,
    right: 
        {
            val: 3,
            left: null,
            right: null,
        },
    
};

let data2 = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: null,
        right: null,
    },
};

console.log(isSameTree(data1, data2));