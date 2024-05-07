/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let row=board.length;
    let col=board[0].length;
    let direction=[[0,1],[1,0],[0,-1],[-1,0]];
    //let array=new Array(row).fill("X").map(()=>Array(col).fill("X"));
    var modify=function(i,j){
        if(i<0 || j<0 || i>=row || j>=col|| board[i][j]!=='O') return;
        board[i][j]='#';
        for(let [x,y] of direction){
            modify(i+x,j+y);
        }
    }
    for(let i=0;i<col;i++){
        if(board[0][i]==='O') modify(0,i);
        if(board[row-1][i]==='O') modify(row-1,i);
    }
    for(let i=0;i<row;i++){
        if(board[i][0]==='O') modify(i,0);
        if(board[i][col-1]==='O') modify(i,col-1);
    }
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(board[i][j]==='O') board[i][j]='X';
            if(board[i][j]==='#') board[i][j]='O';
        }
    }
    return board;
};
console.log(solve([
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","O","O","O"],
    ["X","X","X","X"]]));
