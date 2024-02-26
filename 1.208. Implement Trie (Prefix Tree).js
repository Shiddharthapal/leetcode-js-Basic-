/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
class Trie{
    constructor(){
        this.root={};
    }
    insert (word){
        let node=this.root;
        for(let c of word){
            if(node[c]==null){
                node[c]={};
            }
            node=node[c];
        }
        node.isTheEnd=true;
    }
    search(word){
        let node=this.root;
        for(let c of word){
            if(node[c]===undefined) return false;
            node=node[c];
        }
        if(node.isTheEnd===true) return true;
        else return false;
    }
    startsWith(word){
        let node=this.root;
        for(let c of word){
            if(node[c]===undefined) return false;
            node=node[c];
        }
        return true;
    }
}
var obj=new Trie();
obj.insert("apple");
console.log(JSON.stringify(obj));
var param_2=obj.search("apple");
var param_3=obj.startsWith("app");
var param_4=obj.search("app");
console.log(param_2);
console.log(param_3);
console.log(param_4);
obj.insert("ball");
console.log(JSON.stringify(obj));
var param_5=obj.search("ball");
var param_6=obj.startsWith("al");
console.log(param_5);
console.log(param_6);
