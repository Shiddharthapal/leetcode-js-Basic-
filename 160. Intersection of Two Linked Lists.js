/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getCountList=function(head){
    let count=0;
    while(head){
        count++;
        head=head.next;
    }
    return count;
}
var getIntersectionNode = function(headA, headB) {
    let countA=getCountList(headA);
    let countB=getCountList(headB);
    while(countA>countB){
        countA--;
        headA=headA.next;
    }
    while(countB>countA){
        countB--;
        headB=headB.next;
    }
    let l1=headA;
    let l2=headB;
    while(l1!==l2){
        l1=l1.next;
        l2=l2.next;
    }
  /*
    let l1=headA;
    let l2=headB;
    while(l1!==l2){
        l1=!l1?headB:l1.next;
        l2=!l2?headA:l2.next;
    }*/
     return l1;
};

//intersect korbe tai common linked list lagbe. tai ai link list create koire commoun  vabe use korche
let data1={
    val:2,
    next:{
        val:4,
        next:null,
    },
}
let data={
    val:1,
    next:{
        val:9,
        next:{
            val:1,
            next:data1,
            }
        },
    };
let data2={
    val:3,
    next:data1,
};
console.log(getIntersectionNode(data,data2));
