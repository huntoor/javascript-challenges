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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [];
  queue.push(root);
  
  while(queue.length !== 0) {
    const queueLength = queue.length;
    const currNode = [];
    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift();
      
      if (current.left) {
        queue.push(current.left);
      }
      
      if (current.right) {
        queue.push(current.right);
      }
      
      currNode.push(current.val);
    }
    result.push(currNode);
  }
  return result;
};