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
var printlinklist=function(head){
  while(head){
    console.log(head.val);
    head=head.next;
  }
}
var insertionSortList = function(head) {
  if(!head) return head;
  let array=[];
  let temp=head;
  while(temp){
    array.push(temp.val);
    temp=temp.next;
  }
  array.sort((a,b)=>a-b);

  let root={
    val:array[0],
    next:null,
  }
  let result=root;
  let i=0;
  i++;
  while(i<array.length){
    root.next={
      val:array[i],
      next:null,
    }
    root=root.next;
    i++;
  }
  printlinklist(result);
  return result;
};
let data={
  val:-1,
  next:{
      val:5,
      next:{
          val:3,
          next:{
              val:4,
              next:{
                  val:0,
                  next:null,
              },
          },
      },
  },
}
console.log(insertionSortList(data));
