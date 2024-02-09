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
let printhead=(head)=>{
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
    let result=head;
    temp=head;
    head=head.next;
    if(count===1) return null;
    else if(count===n){
        printhead(head);
        return head;
    }
    let count1=0;
    while(head){
        count1++;
        if(count1===(count-n)){
            temp.next=head.next;
            printhead(result);
            return result;
        }
        temp.next=head;
        temp=temp.next;
        head=head.next;
    }
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
console.log(removeNthFromEnd(data,4));
