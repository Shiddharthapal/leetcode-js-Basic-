/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var getMid=function(head){
    let temp=head;
    let count=0;

    while(temp){
        count++;
        temp=temp.next;
    }
    let mid=(count-1)/2;
    count=0;
    temp=null;
    while(count<=mid){
        temp=head;
        head=head.next;
        count++;
    }
    return temp;
}
var margeList=function(left,right){
    let head=null;
    if(left.val<right.val){
        head=left;
        left=left.next;
    }else{
        head=right;
        right=right.next;
    }
    let result=head;
    while(left && right){
        if(left.val<right.val){
            head.next=left;
            left=left.next;
        }else{
            head.next=right;
            right=right.next;
        }
        head=head.next;
    }
    head.next=left?left:right;
    return result;
}
var sortList = function(head) {
    if(!head ||!head.next) return head;

    var sortlinklist=function(head){
        if(!head ||!head.next) return head;

        let left=head;
        let right=getMid(head);
        let temp=right.next;
        right.next=null;
        right=temp;

        left=sortlinklist(left);
        right=sortlinklist(right);
        return margeList(left,right);
    }
    return sortlinklist(head);
};

let data={
    val:4,
    next:{
        val:2,
        next:{
            val:1,
            next:{
                val:3,
                next:null,
            },
        },
    },
}
console.log(sortList(data));
