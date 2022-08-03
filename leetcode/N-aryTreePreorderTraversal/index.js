/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return [];

  const result = [];
  const stack = [];

  stack.push(root);

  while (stack.length) {
    const currNode = stack.pop();
    result.push(currNode.val);
    for (let i = currNode.children.length - 1; i >= 0; i--) {
      stack.push(currNode.children[i]);
    }
  }
  return result
};


// Another Solution
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {  
  const result = [];
  
  return traverse(root, result);

};

var traverse = function(node, result) {
  if (!node) return result;
  
  result.push(node.val);
  for (let i = 0; i < node.children.length; i++) {
    traverse(node.children[i], result);
  }
  return result
}
