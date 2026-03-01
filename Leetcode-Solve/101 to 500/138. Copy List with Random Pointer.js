/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
class Node {
  constructor(val, next = null, random = null) {
    this.val=val;
    this.next=next;
    this.random=random;
  }
}
var copyRandomList = function (head) {
  if (!head) return null;

  let map = new Map();
  let temp = head;
  //here create new node for all value of list
  while (temp) {
    map.set(temp, new Node(temp.val));
    temp = temp.next;
  }

  temp = head;
  //here one node connect with another node using next and random
  while (temp) {
    let node = map.get(temp);
    node.next = map.get(temp.next) || null;
    node.random = map.get(temp.random) || null;
    temp = temp.next;
  }

  return map.get(head);
};

let list = {
  val: 7,
  random: null,
  next: {
    val: 13,
    random: 0,
    next: {
      val: 11,
      random: 4,
      next: {
        val: 10,
        random: 2,
        next: {
          val: 1,
          random: 0,
          next: null,
        },
      },
    },
  },
};

console.log(copyRandomList(list));
