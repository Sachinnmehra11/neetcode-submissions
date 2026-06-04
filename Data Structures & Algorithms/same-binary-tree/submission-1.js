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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        //base condition
        if(!p&&!q) return true; //if both are null then they will be same tree.

        if(!p||!q || p.val!=q.val) return false; // if p null or q null or p val not equal to q val

        return this.isSameTree(p.left,q.left) && this.isSameTree(p.right,q.right)

    }
}
