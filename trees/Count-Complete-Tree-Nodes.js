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
 * @return {number}
 */
var countNodes = function(root) {
    let currentCount = 0
    if (root === null) return currentCount
    const count = (root) =>{
        currentCount++
        if (root.left) count(root.left)
        if (root.right) count(root.right)
        return
    }
    count(root)
    return currentCount
};
