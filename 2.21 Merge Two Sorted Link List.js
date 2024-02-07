/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var printlink=function(head){
    while(head){
        console.log(head.val);
        head=head.next;
    }
}
var mergeTwoLists = function(list1, list2) {
    if(list1?.val===undefined && list2?.val===undefined) return  list1;
    else if(list1?.val===undefined) return list2;
    else if(list2?.val===undefined) return list1;
    let start=null;
    let result=null;
    if(list1.val>=list2.val){/*link list a 2 ta value compare korte(head.val)
     ( .val) use korte hoi*/
        result=list2;
        list2=list2.next;
        start=result;
    }else{
        result=list1;
        list1=list1.next;
        start=result;
    }
    while(list1 && list2){
        if(list1.val>=list2.val){
            result.next=list2;
            list2=list2.next;
        }else{
            result.next=list1;
            list1=list1.next;
        }
        result=result.next;
    }
    if(list1) result.next=list1;
    else if(list2) result.next=list2;
    printlink(start);
    return start;
};
let data={
    val:1,
    next:{
        val:3,
        next:{
            val:5,
            next:null,
        },
    },
};
let data2={
    val:2,
    next:{
        val:4,
        next:{
            val:6,
            next:null,
        },
    },
};
console.log(mergeTwoLists(data,data2));
