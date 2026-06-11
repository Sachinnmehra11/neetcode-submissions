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
     * @return {number}
     */
    maxPathSum(root) {
      let globalMax= -Infinity;
      if(!root) return 0;
        function sum(root) {
            if (!root) return 0;
            let leftSum = Math.max(0,sum(root.left)); //-5 15 35
            let rightSum = Math.max(0,sum(root.right)); //0
            globalMax= Math.max(globalMax,leftSum+rightSum+root.val); //-5 10 40
            return root.val + Math.max(leftSum, rightSum);
        }
        sum(root);
        return globalMax;

    }
}
