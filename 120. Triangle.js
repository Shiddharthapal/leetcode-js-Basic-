/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let n=triangle.length;
    let visited=Array(n).fill(0).map(()=>Array(n).fill(Number.MAX_VALUE));
    calculate=function(row,col){
        if(row===n-1) return triangle[row][col];
        if(visited[row][col]!==Number.MAX_VALUE) return visited[row][col];
        let down=triangle[row][col]+calculate(row+1,col);
        let digo=triangle[row][col]+calculate(row+1,col+1);
        return visited[row][col]= Math.min(down,digo);
    }
    return calculate(0,0);
};
console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]));
