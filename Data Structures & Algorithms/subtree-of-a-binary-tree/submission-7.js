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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        //base condition
        if(!subRoot) return true;
        if(!root) return false;  
        if(this.isSameTree(root,subRoot)) return true; // subroot is subtree of root
        //recursivly call isSubtree on root.left and root.right
        return this.isSubtree(root.left,subRoot)||this.isSubtree(root.right,subRoot);


    }

    isSameTree(p,q){
        if(!p&&!q) return true; //if both tree and subtree are null means they are equal
        if(!p || !q || p.val!=q.val) return false; //subtre and tree are null or p val is not equal q val means not equal true;

        return this.isSameTree(p.right,q.right)&&this.isSameTree(p.left,q.left);
    }
}
