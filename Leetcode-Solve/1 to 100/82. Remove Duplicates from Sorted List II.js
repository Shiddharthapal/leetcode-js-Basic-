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
    let tempMap=new Map();
    let result=null;
    let temp=null;
    let falg=0;
    while(head){
        if(!map.has(head.val) && !tempMap.has(head.val)){

            if(head?.next?.val===head.val){
                tempMap.set(head.val,1);
            }else{
                if(falg===0){
                    //Create first node for returning the linked list
                    temp={
                        val:head.val,
                        next:null,
                    }
                    result=temp;
                    falg=1;
                }else{
                    map.set(head.val,1)
                    //Create new node with head value for making the linked list 
                    temp.next={
                        val:head.val,
                        next: null,
                    };
                    temp=temp.next;
                }
                
            }
        }
        head=head.next;
    }
    return result;
};

let data={
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
}

console.log(deleteDuplicates(data));