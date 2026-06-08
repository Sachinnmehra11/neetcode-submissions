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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k, arr = []) {
        if (!root) return null;

        if (root.left) this.kthSmallest(root.left, k, arr);

        console.log(root.val);
        arr.push(root.val);

        if (root.right) this.kthSmallest(root.right, k, arr);
        return arr[k - 1];
    }
}
