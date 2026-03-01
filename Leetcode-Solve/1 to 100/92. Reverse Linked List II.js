/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

// var printList=function(node){
//     while(node){
//         console.log("=>", node.val);
//         node=node.next;
//     }
// }

var reverseBetween = function(head, left, right) {
    if(!head.next) return head;
    let start=null;
    let array=[];

    while(head){
        array.push(head.val);
        head=head.next;
    }

    let reverseStart=null;
    let tempReverse=null;
    for(let i=right-1;i>=left-1;i--){
        if(!reverseStart){
            reverseStart={
                val:array[i],
                next:null,
            }
            tempReverse=reverseStart;
        }else{
            tempReverse.next={
                val:array[i],
                next:null,
            }
            tempReverse=tempReverse.next;
        }


    }
    if(left!==0){
        let temp=null;
        for(let i=0;i<left-1;i++){
            if(!start){
                start={
                    val:array[i],
                    next:null,
                },
                temp=start;
            }else{
                temp.next={
                    val:array[i],
                    next:null,
                }
                temp=temp.next;
            }

        }
        if(temp)temp.next=reverseStart;
        else start=reverseStart;
    }else{
        start=reverseStart;
    }
    let tempNode=null;
    let  endStart=null;
    for(let i=right;i<array.length;i++){
            if(!endStart){
                endStart={
                    val:array[i],
                    next:null,
                },
                tempNode=endStart;
            }else{
                tempNode.next={
                    val:array[i],
                    next:null,
                }
                tempNode=tempNode.next;
            }
    }
    if(right!==array.length)tempReverse.next=endStart;
    return start;
    
};

let data={
    val:1,
    next:{
        val:2,
        next:null,
        // next:{
        //     val:3,
        //     next:{
        //         val:4,
        //         next:{
        //             val:5,
        //             next:null,
                
        //         },
        //     },
        // },
    },
}

console.log(reverseBetween(data,1,1));