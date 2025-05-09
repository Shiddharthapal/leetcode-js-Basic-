/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let flag=true
    let arr = new Array(9);

    for (let i = 0; i < 9; i++) {
        arr[i] = new Array(9);
    }
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(arr[i][board[i][j]]>0 ) flag=false
            else if((board[i][j]>=1 ||board[i][j]<=9)) arr[i][board[i][j]]=1
        }
        if(flag==false){
            return flag
            break;
        }
    }
    let i,j
    let arr2 = new Array(9);

    for (let i = 0; i < 9; i++) {
        arr2[i] = new Array(9);
    }
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            if(arr2[board[j][i]][i]>0) flag=false
            else if((board[j][i]>=1 ||board[j][i]<=9) ) arr2[board[i][j]][i]=1
        }
        if(flag==false){
            return flag
            break;
        }
    }
    return flag
    
};
console.log(isValidSudoku([
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))