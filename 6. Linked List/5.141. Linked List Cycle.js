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
var hasCycle = function(head) {// hare & tortoise running
    if(!head) return head;
    let tortoise=head;
    let hare=head;

    while(hare){
        tortoise=tortoise.next;
        hare=hare.next?.next;
    /*"?" ata check kore "first.next" er value
        null or undifined ki na. jodi null or undifined na hoi then next node
        a move kore. r undifined or null hoyle r move kore na. mainly "?" ata
        use kora hoi  check korar jonno. jar jonno kono error ashbe na*/
        if(tortoise===hare) return true;
    }
    return false;
}
let data={
    val:1,
    next:{
        val:4,
        next:{
            val:0,
            next:{
                val:-4,
                next:null,
            },
        },
    },
};
data.next.next.next.next=data.next;
console.log(hasCycle(data));