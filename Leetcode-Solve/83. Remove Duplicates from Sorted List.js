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
    let map=new Map();
    let result=null;
    let temp=null;
    let flag=0;
    while(head){
        if(!map.has(head.val)){
            if(flag===0){
                result={
                    val:head.val,
                    next:null,
                }
                temp=result;
                flag=1;
            }else{
                temp.next={
                    val:head.val,
                    next:null,
                }
                temp=temp.next;
            }

            map.set(head.val,1);
        }
        head=head.next;
    }
    return result;
    
};

let data={
    val:1,
    next:{
        val:1,
        next:{
            val:2,
            next:{
                val:3,
                next:{
                    val:3,
                    next:null,
                },
            },
        },
    },
};

console.log(deleteDuplicates(data));