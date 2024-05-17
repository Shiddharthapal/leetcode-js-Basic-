/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head) return head;
    let map=new Map();
    while(head){
      if(map.has(head)) return head;
      if(!map.has(head)) map.set(head,1);
      head=head.next;
      
    }
    return null;
};
let data={
  val:3,
  next:{
      val:2,
      next:{
          val:7,
          next:{
            val:1,
            next:null,
          },
      },
  },
};
data.next.next.next=data;
console.log(detectCycle(data));
