/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var printLinkList=function(head){
    while(head){
        console.log(head.val);
        head=head.next;
    }
}
var addTwoNumbers = function(l1, l2) {
    let sum;
    let result=0;
    let carry=0;
    let value;

    while(l1 ||l2){
        sum=0;
        if(l1){
            sum+=l1.val;
            l1=l1.next;
        }
        if(l2){
            sum+=l2.val;
            l2=l2.next;
        }
        
        sum+=carry;
        carry=Math.floor(sum/10);
        value=sum%10;
        if(result===0){
            head={
                val:value,
                next:null,
            }
            result=head;
            continue;
        }

        head.next={
            val:value,
            next:null,
        }
        head=head.next;
    }
    if(carry===1){
        head.next={
            val:carry,
            next:null,
        }
    }
    printLinkList(result);
    return result;
};
/*var addTwoNumbers = function(l1, l2) {
    let sum=0;
    let carry=0;
    if(l1){
        sum+=l1.val;
        l1=l1.next;
    }
    if(l2){
        sum+=l2.val;
        l2=l2.next;
    }
    carry=Math.floor(sum/10);
    sum=sum%10;
    let link={
        val:sum,
        next:null,
    }
    let result=link;
    while(l1 || l2){
        sum=carry;
        if(l1){
            sum+=l1.val;
            l1=l1.next;
        }
        if(l2){
            sum+=l2.val;
            l2=l2.next;
        }
        carry=Math.floor(sum/10);
        sum=sum%10;
        link.next={
            val:sum,
            next:null,
        }
        link=link.next;
    }
    if(carry) link.next={
        val:carry,
        next:null,
    }
    //printLinkList(result);
    return result;
};*/
let data={
    val:2,
    next:{
        val:4,
        next:{
            val:3,
            next:null,
        },
    },
};
let data2={
    val:5,
    next:{
        val:6,
        next:{
            val:4,
            next:null,
        },
    },
}
console.log(addTwoNumbers(data,data2));