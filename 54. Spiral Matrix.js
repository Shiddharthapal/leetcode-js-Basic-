/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let row=matrix.length;
  let col=matrix[0].length;
  let top=0,right=col-1,bottom=row-1,left=0;

  let result=[];
  while(top<=bottom && left<=right){
    for(let i=left;i<=right;i++){
      result.push(matrix[top][i]);
    }
    top++;

    for(let i=top;i<=bottom;i++){
      result.push(matrix[i][right]);
    }
    right--;
    /* jehatu while() loop er modda 4 ta statement loop execute 
    hoyssa and value o change hoyssa boundary gular tai check detace je
    kono value condition break kortasa kina update howar pore*/

    //bottom a kaj hoyssa tai top,bottom check delam
    if(top<=bottom){// ekta row er matrix thakle then bottom repeat hoyte pare tai check delam je repeat hoba ki na
      for(let i=right;i>=left;i--){
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // left a kaj hoyssa tai left,right check delam
    if(left<=right){// ekta row er matrix thakle then left side er value repeat hoyte pare tai check dawa hoyssa je value repeat hoba ki na
      for(let i=bottom;i>=top;i--){
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
};
console.log(spiralOrder(
  [[1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]]
  ));
