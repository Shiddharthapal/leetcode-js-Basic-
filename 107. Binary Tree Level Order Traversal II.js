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
var levelOrderBottom = function(root) {
    let result=[];
    let queue=[root];
    while(queue.length>0){
        let level=[];
        let len=queue.length;
        for(let i=0;i<len;i++){
            let node=queue.shift();
            if(node===null) continue;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            level.push(node.val);
        }
        result.push(level);
    }
    result=result.reverse();
    return result;
};
let data={
    val:3,
    left:{
        val:9,
        left:null,
        right:null,
    },
    right:{
        val:20,
        left:{
            val:15,
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
console.log(levelOrderBottom(data));
