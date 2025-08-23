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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) return true
    if (root.left === null && root.right === null) return true
    if (root.left === null || root.right === null || root.left.val !== root.right.val) return false
    return isSymmetric({left: root.left.left, right: root.right.right}) && isSymmetric({left: root.left.right, right: root.right.left})
};