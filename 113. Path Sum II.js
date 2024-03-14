/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum=function(root,targetSum){
    if(root===null) return [];
    let result=[];
    let temp=[];
    var makeArray=function(root,targetSum){
        if(!root) return;
        temp.push(root.val);
        targetSum-=root.val;
        if(!root.left && !root.right && targetSum===0){
            result.push([...temp]);
        }
        makeArray(root.left,targetSum);
        makeArray(root.right,targetSum);
        return temp.pop();
    }
    makeArray(root,targetSum);
    return result;
}
/*let data={
    val:5,
    left:{
        val:4,
        left:{
            val:11,
            left:{
                val:7,
                left:null,
                right:null,
            },
            right:{
                val:2,
                left:null,
                right:null,
            },
        },
        right:null,
    },
    right:{
        val:8,
        left:{
            val:13,
            left:null,
            right:null,
        },
        right:{
            val:4,
            left:{
                val:5,
                left:null,
                right:null,
            },
            right:{
                val:1,
                left:null,
                right:null,
            },
        },
    },
};*/
let data={
    val:0,
    left:{
        val:1,
        left:null,
        right:null,
    },
    right:{
        val:1,
        left:null,
        right:null,
    },
}
console.log(pathSum(data,1));
