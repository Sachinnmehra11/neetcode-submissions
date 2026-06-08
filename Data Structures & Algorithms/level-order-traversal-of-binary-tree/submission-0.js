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
        let queue = [];
        let order = [];
        if (root) {
            queue.push(root);
        }
        while (queue.length > 0) {
            let level = [];
            let levelLength = queue.length;
            for (let i = 0; i < levelLength; i++) {
                let node = queue.shift();

                if (node) {
                    level.push(node.val);
                    if (node.left) queue.push(node.left);
                    if (node.right) queue.push(node.right);
                }
            }
            if (level) {
                order.push(level);
            }
        }
        return order;
    }
}
