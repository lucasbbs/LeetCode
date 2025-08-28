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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const averages = []

    const helper = (node, level, averages) => {
        if (node === null) return
        if (averages.length <= level) averages.push([])
        averages[level].push(node.val)
        helper(node.left, level + 1, averages)
        helper(node.right, level + 1, averages)
    }
    helper(root, 0 , averages)

    return averages.map(x => x.reduce((acc, curr) => acc+= curr, 0)/x.length)
};
