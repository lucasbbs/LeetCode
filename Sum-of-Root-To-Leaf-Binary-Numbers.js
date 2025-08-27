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
var sumRootToLeaf = function(root) {
    let output = []
    function dfs(root, string) {
        if (root === null) return
        string += root.val
        dfs(root.left, string)
        dfs(root.right, string)
        if (!root.left && !root.right) output.push(string)
    }
    dfs(root, '')
    
    return output.map(x => parseInt(x, 2)).reduce((curr, acc) => acc+=curr)
};