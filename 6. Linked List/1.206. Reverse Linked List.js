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
let printlink=(head)=>{
    let temp=head;
    while(temp){
        console.log(temp.val);
        temp=temp.next;
    }
}
var reverseList = function(head) {
    if(head?.val===undefined) return head;
    let temp=null;
    let result=null;
    while(head?.next){
        temp=head;
        head=head.next;
        temp.next=result;
        result=temp;
    }
    head.next=temp;
    printlink(head);
    //return head;
};
let data={
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:{
                val:4,
                next:{
                    val:5,
                    next:null,
                },
            },
        },
    },
};
console.log(reverseList(data));