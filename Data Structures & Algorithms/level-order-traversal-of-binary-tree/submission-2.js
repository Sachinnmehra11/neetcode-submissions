/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let array1=[];
        let queue=[];
        if(root) queue.push(root);
        while(queue.length){
            let level=queue.length;
            let result=[]
            for(let i=0;i<level;i++){
                let node=queue.shift();
                if(node){
                    result.push(node.val);
                    if(node.left) queue.push(node.left);
                    if(node.right) queue.push(node.right)
                }
            }
            if(result) array1.push(result);
        
        }
        return array1
    }
}
