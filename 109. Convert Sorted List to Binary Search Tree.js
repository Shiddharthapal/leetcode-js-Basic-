/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let arr=[];
    if(head===null) return null;
    while(head){
        arr.push(head.val);
        head=head.next;
    }
    let first=0;
    let last=arr.length-1;
    var makeTree=function(first,last){
        if(first>last) return null;
        let mid=Math.floor((first+last)/2);
        let root={
            val:arr[mid],
            left:null,
            right:null,
        };
        root.left=makeTree(first,mid-1);
        root.right=makeTree(mid+1,last);
        return root;
    }
    return makeTree(first,last);
    
};
let head={
    val:-10,
    next:{
        val:-3,
        next:{
            val:0,
            next:{
                val:5,
                next:{
                    val:9,
                    next:null,
                },
            },
        },
    },
};
console.log(sortedListToBST(head));
