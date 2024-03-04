/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let result=[];
    let queue=[root];
    while(queue.length>0){
        let node=queue.shift();
        if(node===null){
            result.push("null");
            continue;
        }
        queue.push(node.left);
        queue.push(node.right);
        result.push(node.val);
    }
    return result.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(string) {
    let arr=string.split(",");
    if(arr[0]==="null") return null;
    let root={
        val:arr[0],
        left:null,
        right:null,
    };
    let index=1;
    let queue=[root];
    while(queue.length>0){
        let node=queue.shift();
        if(arr[index]!=="null"){
            node.left={
                val:arr[index],
                left:null,
                right:null,
            };
            queue.push(node.left);
        }
        index++;
        if(arr[index]!=="null"){
            node.right={
                val:arr[index],
                left:null,
                right:null,
            };
            queue.push(node.right);
        }
        index++;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
let data={
    val:3,
    left:{
        val:2,
        left:{
            val:1,
            left:null,
            right:null,
        },
        right:null,
    },
    right:{
        val:5,
        left:{
            val:6,
            left:null,
            right:null,
        },
        right:null,
    },
}
let string = serialize(data);
console.log(string);
let tree = deserialize(string);
console.log(tree);
