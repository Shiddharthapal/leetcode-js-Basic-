/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = {};
    this.tail = {};

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  removelastused() {
    const [key, next, prev] = [this.head.next.key, this.head.next.next, this.head];

    this.map.delete(key);
    this.head.next = next;
    this.head.next.prev = prev;
  }

  put(key, value) {
    const haskey = this.get(key) !== -1;
    const isatcapacity = this.map.size === this.capacity;

    if (haskey) return (this.tail.prev.value = value);
    if (isatcapacity) this.removelastused();

    const node = { key, value };
    this.map.set(key, node);
    this.movetofront(node);
  }
  movetofront(node) {
    const [prev, next] = [this.tail.prev, this.tail];

    this.tail.prev.next = node;
    this.connectednode(node, { prev, next });
    this.tail.prev = node;
  }

  connectednode(node, top) {
    node.prev = top.prev;
    node.next = top.next;
  }
  get(key) {
    const hasKey = this.map.has(key);
    if (!hasKey) return -1;

    let node = this.map.get(key);
    this.discountNode(node);
    this.movetofront(node);

    return node.value;
  }
  discountNode(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }
}

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1); // return -1 (not found)
lRUCache.get(3); // return 3
lRUCache.get(4);
