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
 * @return {number}
 */
var minDepth = function(root) {
    if(root===null) return 0;
    let rootLevel=Number.MAX_SAFE_INTEGER,level=Number.MAX_SAFE_INTEGER;
    var calculateDepth=function(root,depth=0){
        if(root===null) return depth;
        let bam=calculateDepth(root.left,depth+1);
        let dan=calculateDepth(root.right,depth+1);
        if(bam===dan){
            rootLevel=bam;
        }
        return level=Math.min(level,rootLevel);
    }
    let depth=calculateDepth(root);
    return depth;
};
let data={
    val:2,
    left:null,
    right:{
        val:3,
        left:null,
        right:{
            val:4,
            left:null,
            right:{
                val:5,
                left:null,
                right:{
                    val:6,
                    left:null,
                    right:null,
                },
            },
        },
    },
}
console.log(minDepth(data));
