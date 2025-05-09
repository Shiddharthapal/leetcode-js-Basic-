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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k, array=[]) {
    /* kth index er value ber korte hoyle array er modda value assign korte hbe
    then oi array thake index wise value ber korte hbe. value asssign korar poceesure holo
    mfp */
    if(root===null) return;
    kthSmallest(root.left,k,array);// left a most small value pawa jai
    array.push(root.val);
    kthSmallest(root.right,k,array);
    return array[k-1];
}
let root = {
    val: 3,
    left: {
        val: 1,
        left: null,
        right: {
            val: 2,
            left: null,
            right: null,
        },
    },
    right: {
        val: 4,
        left: null,
        right: null,
    },
};
let root2 = {
    val: 3,
    left: {
        val: 1,
        left: null,
        right: {
            val: 2,
            left: null,
            right: null,
        },
    },
    right: null,
};
console.log(kthSmallest(root,1));
console.log(kthSmallest(root2,2));