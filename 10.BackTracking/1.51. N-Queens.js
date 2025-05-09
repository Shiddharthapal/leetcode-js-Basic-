/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result=[];
    var isSafe=function(row,col,board){
        //vertically
        for(let i=0;i<n;i++){
            if(board[i][col]==="Q") return false;
        }
        //horizontally
        for(let i=0;i<n;i++){
            if(board[row][i]==="Q") return false;
        }
        let step;
        //top left diagonal
        step=Math.min(row,col);
        for(let i=1;i<=step;i++){
            if(board[row-i][col-i]==="Q") return false;
        }
        //bottom left diagonal
        step=Math.min(n-row-1,col);
        for(let i=1;i<=step;i++){
            if(board[row+i][col-i]==="Q") return false;
        }
        //top right diagonal
        step=Math.min(row,n-col-1);
        for(let i=1;i<=step;i++){
            if(board[row-i][col+i]==="Q") return false;
        }
        //bottom right diagonal
        step=Math.min(n-row-1,n-col-1);
        for(let i=1;i<=step;i++){
            if(board[row+i][col+i]==="Q") return false;
        }
        return true;
    }
    var backTracking=function(row,board){
        if(row===n){
            result.push([...board]);///important khub
        }
        for(let col=0;col<n;col++){
            let is=isSafe(row,col,board);
            if(is){
                board[row]=
                    board[row].substring(0,col)+
                    "Q"+board[row].substring(col+1);
                backTracking(row+1,board);//recursive
                //backtracking
                board[row]=
                    board[row].substring(0,col)+
                    "."+board[row].substring(col+1);
            }
        }
    }
    let state=".".repeat(n);
    let board=Array(n).fill(state);
    backTracking(0,board);
    return result;
};
console.log(solveNQueens(4));