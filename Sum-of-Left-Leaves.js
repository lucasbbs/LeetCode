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
var sumOfLeftLeaves = function(root) {
    let sum = 0
    const calculateSum = (root) => {
        if (root == null) return;
        if (root.left !== null && root.left.left === null && root.left.right === null) sum += root.left.val
        calculateSum(root.left)
        calculateSum(root.right)
    }
    calculateSum(root)

    return sum
};