/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var print = function (temp) {
  while (temp) {
    console.log("=>", temp.val);
    temp = temp.next;
  }
};
var rotateRight = function (head, k) {
  if (!head) return head;
  if (k === 0) return head;
  let temp = head,
    count = 0,
    last;
  while (temp) {
    count++;
    temp = temp.next;
    if (temp?.next) last = temp.next;
  }
  if (count < k) {
    let tempk = k % count;
    if (tempk === 0) k = count;
    else k = tempk;
  }
  if (count === 1) return head;
  if (count === k) return head;
  let first = head;
  k = k % count;
  let find = count - k;
  let result;
  count = 0;
  while (head) {
    count++;
    if (count === find) {
      result = head.next;
      head.next = null;
    }
    head = head.next;
  }
  if (last || result.next) last.next = first || null;
  else result.next = first || null;
  return result;
};

let data = {
  val: 1,
  next: {
    val: 2,
    next: null,
  },
};
console.log(rotateRight(data, 1));
