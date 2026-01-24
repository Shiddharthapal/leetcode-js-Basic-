/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var print=function(head){
    while(head){
        console.log("=>",head.val);
        head=head.next;
    }
}
var partition = function(head, x) {
    if(head.length ===1) return head;
    let first=null;
    let last=null;
    let finalFirst=null;
    let finalLast=null;
    let flag=0;

    while(head){
        if(head.val<x){

            if(finalFirst===null){
                first={
                    val:head.val,
                    next:null,
                }
                finalFirst=first;
            }else{
                first.next={
                    val:head.val,
                    next:null,
                }
                first=first.next;
            }

        }else{

            if(finalLast===null){
                last={
                    val:head.val,
                    next:null,
                }
                finalLast=last;
            }else{
                last.next={
                    val:head.val,
                    next:null,
                }
                last=last.next;
            }

        }
        head=head.next;
    }
    if(!finalFirst) return finalLast;
    if(finalLast) first.next=finalLast;
    return finalFirst;
    
};

let data={
    val:1,
    next:{
        val:4,
        next:{
            val:2,
            next:{
                val:3,
                next:{
                    val:5,
                    next:null,
                },
            },
        },
    },
}
console.log(partition(data,1))