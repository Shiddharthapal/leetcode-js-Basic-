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
let printlinklist=(head)=>{
    let temp=head;
    while(temp){
        console.log(temp.val);
        temp=temp.next;
    }
}
var removeNthFromEnd = function(head, n) {
    if(!head) return head;
    let first=1;
    let last=1;
    let hold=head;
    let result=head;
    let temp=null;
    while(head){
        if(last-first>=n){
            first++;
            temp=hold;
            hold=hold.next;
        }
        last++;
        head=head.next;
    }

    if(first!==1) temp.next=hold.next;
    else result=result.next;
    printlinklist(result);
    return result;
};
/*var removeNthFromEnd = function(head, n) {
    let count=0;
    let temp=head;
    while(temp){
        count++;
        temp=temp.next;
    }
    if(count===1){
        return null;
    }else if(n===count){
        head=head.next
        printhead(head);
        return head;
    }
    let count1=1,count2=1;
    temp=head;
    let result=head;
    head=head.next;
    while(head){
        count2++;
        if(count2-count1>n){
            count1++;
            temp=temp.next;
        }
        head=head.next;
    }
    temp.next=temp.next.next;
    //printlinklist(result);
    return result;
};*/
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