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
     * @return {TreeNode}
     */
    invertTree(root) {
        //base case
        if (!root) return null;
        //swap the children
        let temp = root.left;
        root.left = root.right;
        root.right = temp;

        this.invertTree(root.left); //invert left sub tree
        this.invertTree(root.right); //invert right sub tree
        return root;
    }
}
