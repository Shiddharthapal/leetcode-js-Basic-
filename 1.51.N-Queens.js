/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result=[];
    var isSafe=function(board,row,col){
        //vartically
        for(let i=0;i<n;i++){
            if(board[i][col] === "Q") return false;
        }
        //horijontally
        for(let i=0;i<n;i++){
            if(board[row][i] === "Q") return false;
        }
        let step;
        //top left diagonal
        step=Math.min(row,col);
        for(let i=1;i<=step;i++){
            if(board[row-1][col-1] === "Q") return false;
        }
        //bottom left diagonal
        step=Math.min(n-row-1 , col);
        for(let i=1;i<=step;i++){
            if(board[row+i][col-i] === "Q") return false;
        }
        //top right diagonal
        step=Math.min(row,n-col-1);
        for(let i=1;i<=step;i++){
            if(board[row-i][col+i] === "Q") return false;
        }
        //bottom right diagonal
        step=Math.min(n-row-1,n-col-1);
        for(let i=1;i<=step;i++){
            if(board[row+i][col+i] === "Q") return false;
        }
        return true;
    }
    var backTracking=function(row,board){
        if(row===n){
            result.push([...board]);
            /*make a copy of board and then push it to the result array.
            it modify the board array without directly change the orginal
            array*/
        }
        for(let col=0;col<n;col++){
            let is=isSafe(board,row,col);
            if(is){
                board[row]=
                    board[row].substring(0,col)+"Q"
                    +board[row].substring(col+1);
                backTracking(row+1,board);
                board[row]=
                    board[row].substring(0,col)+"."
                    +board[row].substring(col+1);
            }
        }
    }
    let state=".".repeat(n);
    let board=Array(n).fill(state);
    backTracking(0,board);
    return result;
};
console.log(solveNQueens(4));
