/**
 * @param {number} capacity
 */
class LRUCache {
    constructor(capacity){
        this.capacity=this.capacity;
        this.map=new Map();
        this.head={};
        this.tail={};


        this.head.prev=this.tail;
        this.tail.prev=this.head;
    }
    get = function(key){
        const hasKey=map.has(key);
        if(!hasKey) return -1;

        let node=this.map.get(key);
        


    }

    put = function(key, value) {
    
    };
    
};




let  lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4); 

