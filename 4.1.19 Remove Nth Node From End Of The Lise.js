/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let printlink=(head)=>{
    let temp=head;
    while(temp){
        console.log(temp.val);
        temp=temp.next;
    }
}
var removeNthFromEnd = function(head, n) {
    if(head?.val===undefined) return head;
    let count=0;
    let temp=head;
    while(temp){
        count++;
        temp=temp.next;
    }
    if(count===1) return null;
    else if(n===count){
        head=head.next;
        printlink(head);
        return head;
    }
    let count1=1,count2=1;
    let result=head;
    temp=head;
    head=head.next;
    while(head){
        count2++;
        if(count2-count1>n){
            count1++;
            temp=temp.next;
        }
        head=head.next;
    }
    temp.next=tempnext.next;
    printlink(result);
    return result;
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
console.log(removeNthFromEnd(data,5));
