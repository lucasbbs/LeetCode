/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const toBST = (numbers, start, end) => {
        if (start > end) return null
        let mid = start + Math.floor((end - start) / 2);
        let root = new TreeNode(numbers[mid])
        root.left = toBST(numbers, start, mid - 1)
        root.right = toBST(numbers, mid + 1, end)
        return root
    }
    return toBST(nums, 0, nums.length - 1)
};
