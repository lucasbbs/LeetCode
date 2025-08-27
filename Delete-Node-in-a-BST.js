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
 * @param {number} key
 * @return {TreeNode}
 */

function getSuccessor(curr) {
    curr = curr.right;
    while (curr !== null && curr.left !== null) {
        curr = curr.left;
    }
    return curr;
}
var deleteNode = function(root, key) {
    if (root === null) return root

    if (root.val  > key) {
        root.left = deleteNode(root.left, key)
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key)
    } else {
        if (root.left === null)
            return root.right
        if (root.right === null)
            return root.left
        let successor = getSuccessor(root)
        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
    }
    return root;
};