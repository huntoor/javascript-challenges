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
 var isValidBST = function(root) {
  if (!root) return true;
  
  const traverse = (root, min, max) => {
    if (!root) return true;
    
    if (min !== null && min >= root.val) return false;
    else if (max !== null && max <= root.val) return false;
    
    return traverse(root.left, min, root.val) && traverse(root.right, root.val, max);
  }
  return traverse(root, null, null);
  
};