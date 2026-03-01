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
var swapPairs = function (head) {
  if (head?.val === undefined) return head;
  let result = head;
  let temp = null;
  let prev = null;
  if (head?.next) {
    temp = head.next;
    head.next = temp.next;
    temp.next = head;
    head = head.next;
    result = temp;
    prev = temp.next;
  }
  while (head?.next) {
    temp = head.next;
    head.next = temp.next;
    prev.next = temp;
    temp.next = head;
    head = head.next;
    prev = temp.next;
  }
  return result;
};

let data = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

console.log(swapPairs(data));
