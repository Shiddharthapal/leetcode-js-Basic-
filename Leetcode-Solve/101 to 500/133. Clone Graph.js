/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return null;
    let map=new Map();

    function dfs(curr){
        if(map.has(curr))return map.get(curr);

        let nodee=new Node(curr.val);
        map.set(curr, nodee);

        for(let nei of curr.neighbors){
            nodee.neighbors.push(dfs(nei));
        }
        return nodee;

    }
    return dfs(node);
    
};

let node1=new Node(1);
let node2=new Node(2);
let node3=new Node(3);
let node4=new Node(1);

node1.neighbors=[node2,node4];
node2.neighbors=[node1,node3];
node3.neighbors=[node2,node4];
node4.neighbors=[node1,node3];

console.log(cloneGraph(node1));