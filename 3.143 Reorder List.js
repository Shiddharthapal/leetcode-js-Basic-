/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
let printlink=(head)=>{
    while(head){
        console.log(head.val);
        head=head.next;
    }
}

var reorderList = function(head) {
    if(head?.val===undefined)return head;
    let tail=null;
    let temp=head;
    temp.prev=null;
    while(temp){
        if(temp?.next){
            temp.next.prev=temp;
        }else{
            tail=temp;
        }
        temp=temp.next;
    }
    let result=head;
    while(head!==tail && head.next!==tail){
        temp=tail;
        tail.prev.next=tail.next;
        tail=tail.prev;
        temp.next=head.next;
        head.next=temp;
        head=temp.next;
    }
    printlink(result);
    return result;
};
let data={
    val:1,
    prev:null,
    next:{
        val:2,
        prev:1,
        next:{
            val:3,
            prev:2,
            next:{
                val:4,
                prev:3,
                next:{
                    val:5,
                    prev:4,
                    next:null,
                },
            },
        },
    },
};
console.log(reorderList(data));
