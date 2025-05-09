/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let row=heights.length;
    let col=heights[0].length;
    let pasafic=Array(row).fill().map(()=>Array(col).fill(false));
    let pasafic2=Array(row).fill().map(()=>Array(col).fill(false));
    let direction=[[0,1],[0,-1],[1,0],[-1,0]];

    var dfs=function(r,c){
        pasafic[r][c]=true;
        for(let [x,y] of direction){
            let rown=r+x;
            let coln=c+y;

            if(rown<0||rown>=row
                ||coln<0||coln>=col
                ||pasafic[rown][coln]
                ||heights[r][c]>heights[rown][coln]){
                    continue;
                
            }
            dfs(rown,coln);
        }
    }
    for(let i=0;i<row;i++){
        dfs(i,0);
    }
    var dfs4=function(r,c){
        pasafic[r][c]=true;
        for(let [x,y] of direction){
            let rown=r+x;
            let coln=c+y;

            if(rown<0||rown>=row
                ||coln<0||coln>=col
                ||pasafic[rown][coln]
                ||heights[r][c]>heights[rown][coln]){
                    continue;
                
            }
            dfs4(rown,coln);
        }
    }
    for(let i=0;i<col;i++){
        dfs4(0,i);
    }
    var dfs2=function(r,c){
        pasafic2[r][c]=true;

        for(let [x,y] of direction){
            let nrow=r+x;
            let ncol=c+y;

            if(nrow<0||nrow>=row
                ||ncol<0||ncol>=col
                ||pasafic2[nrow][ncol]
                ||heights[r][c]>heights[nrow][ncol]){
                    continue;
            }
            dfs2(nrow,ncol);
        }
    }
    for(let i=0;i<row;i++){
        dfs2(i,col-1);
    }
   var dfs3=function(r,c){
        pasafic2[r][c]=true;

        for(let [x,y] of direction){
            let nrow=r+x;
            let ncol=c+y;

            if(nrow<0||nrow>=row
                ||ncol<0||ncol>=col
                ||pasafic2[nrow][ncol]
                ||heights[r][c]>heights[nrow][ncol]){
                    continue;
            }
            dfs3(nrow,ncol);
        }
    }
    for(let i=0;i<col;i++){
        dfs3(row-1,i);
    }
    let result=[];
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(pasafic[i][j] && pasafic2[i][j]){
                result.push([i,j]);
            }
        }
    }
    return result;
};
let heights = 
    [[2,1],
    [1,2]];
console.log(pacificAtlantic(heights));