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
        let result = []; //level order traversal in list
        let queue = []; //queue for BST
        if (root) {
            //if queue is empty
            queue.push(root);
        }
        while (queue.length > 0) {
            let level = queue.length;
            let currentLevelNode = [];
            for (let i = 0; i < level; i++) {  
                let current = queue.shift(); //remove first element from queue
                if (current) {
                    currentLevelNode.push(current.val);
                    if (current.left) queue.push(current.left);
                    if (current.right) queue.push(current.right);
                }
            }
            if (currentLevelNode) result.push(currentLevelNode);
        }
        return result;
    }
}
