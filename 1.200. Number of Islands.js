/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m=grid.length;
    let n=grid[0].length;
    let dfs=function(i,j){
        if(i<0 ||j<0||i>=m||j>=n||grid[i][j]==="0"){
            return;
        }
        grid[i][j]="0";
        dfs(i,j+1);//right side
        dfs(i+1,j);//down
        dfs(i,j-1);//left side
        dfs(i-1,j);//up
    }
    let count=0;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]==="1"){
                count++;
                dfs(i,j);
            }
        }
    }
    return count;
};
let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];
console.log(numIslands(grid));
