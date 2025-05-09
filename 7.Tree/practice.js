/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root;
    let queue=[root];
    let temp=[];
    while(queue.length){
        let node=queue.shift();
        if(node.left) temp.push(node.left);
        if(node.right) temp.push(node.right);

        if(queue.length===0){
            node.next=null;
            queue=temp;
            temp=[];
        }else{
            node.next=queue[0];
        }
    }
    return root;
};
let data = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val:7,
                left:null,
                right:null,
                next:null,
            },
            right: null,
            next:null,
        },
        right: {
            val: 5,
            left: null,
            right: null,
            next:null,
        },
        next:null,
    },
    right: {
        val: 3,
        left: null,
        right: {
            val: 6,
            left: null,
            right: {
                val:8,
                left:null,
                right:null,
                next:null,
            },
            next:null,
        },
        next:null,
    },
};

console.log(connect(data));