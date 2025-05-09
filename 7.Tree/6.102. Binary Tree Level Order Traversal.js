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
 * @return {number[][]}
 */
var generateHash=function(root,level,hashMap){
    if(root===null) return;

    if(hashMap.has(level)){
        hashMap.get(level).push(root.val);
    }else{
        hashMap.set(level,[root.val]);
    }

    generateHash(root.left,level+1,hashMap);
    generateHash(root.right,level+1,hashMap);
}
var levelOrder = function(root) {
    let result=[];
    let hashMap=new Map();

    generateHash(root,0,hashMap);

    for(let [key,val] of hashMap){
        result.push(val);
    }
    return result;
};
let root = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null,
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
};
console.log(levelOrder(root));