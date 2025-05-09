/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    let first=head;
    let last=head;
    while(first){
        last=last.next;
        first=first.next?.next;/*"?" ata check kore "first.next" er value
        null or undifined ki na. jodi null or undifined na hoi then next node
        a move kore. r undifined or null hoyle r move kore na. mainly "?" ata
        use kora hoi  check korar jonno. jar jonno kono error ashbe na*/
        if(first===last) return true;
    }
    return false;
};
let data={
    val:3,
    next:{
        val:2,
        next:null,
    },
};
data.next.next=data;
console.log(hasCycle(data));
  