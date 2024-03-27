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
// tree upor ekta extra line dia connect korca
var connect = function(root) {
    if(!root) return null;
    let current=root;
    let nxt=root.left;
    current.next=null;
    while(current && nxt){
        current.left.next=current.right;
        if(current.next){
            current.right.next=current.next.left;
        }
        current=current.next;
        if(!current){
            current=nxt;
            nxt=current.left;
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
            left: null,
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
        left: {
            val: 6,
            left: null,
            right: null,
            next:null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
            next:null,
        },
        next:null,
    },
};

console.log(connect(data));
