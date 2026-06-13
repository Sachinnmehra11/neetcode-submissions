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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        //create a string using pre order traversal.
        if (!root) return "null";
        let leftString = this.serialize(root.left);
        let rightString = this.serialize(root.right);
        return root.val + "," + leftString + "," + rightString;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let vals = data.split(',');
        function build(){
            let val= vals.shift();
            if(val=="null") return null;
            let newNode= new TreeNode(parseInt(val));
            newNode.left=build();
            newNode.right=build();
            return newNode;
        }
        return build();
    }
}
