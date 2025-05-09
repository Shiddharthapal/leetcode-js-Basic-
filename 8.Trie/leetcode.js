/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let row=board.length;
    let trie={};
    let col=board[0].length;
    let result=[];
    let visited=new Array(row).fill(null).map(()=>new Array(col).fill(false));
    let direction=[[0,1],[1,0],[0,-1],[-1,0]];

    var maketrie=function(words){
        for(let word of words){
            let node=trie;
            for(let c of word){
                if(!node[c]) node[c]={};
                node=node[c];
            }
            node.word=word;
        }
    }
    maketrie(words);

    var findtrie=function(i,j,node){
        if(node.word){
            result.push(node.word);
            node.word=null;
        }
        if(i>=row||i<0||j>=col||j<0||visited[i][j]||!node[board[i][j]]) return;
        visited[i][j]=true;

        for(let [x,y] of direction){
            findtrie(i+x,j+y,node[board[i][j]]);
        }
        visited[i][j]=false;
    }
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            findtrie(i,j,trie);
        }
    }
    return result;
};
let board = [
["o","a","a","n"],
["e","t","a","e"],
["i","h","k","r"],
["i","f","l","v"]];
let words = ["oath","pea","eat","rain"];
console.log(findWords(board,words))
