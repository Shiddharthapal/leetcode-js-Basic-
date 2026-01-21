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
var deleteDuplicates = function(head) {
    if(!head.length) return head;
    let map=new Map();
    let temp={
        val:head?.val,
        next:null,
    }
    let result=temp;
    map.set(head?.val,1);
    head=head?.next;
    while(head){
        if(!map.has(head.val)){  
            temp.next={
                val:head.val,
                next:null,
            }
            temp=temp.next;
            map.set(head.val,1);
        }
        head=head.next;
    }
    return result; 
};

let data={
    
};

console.log(deleteDuplicates(data));