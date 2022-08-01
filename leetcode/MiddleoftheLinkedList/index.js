/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
  let count = 0;
  let result = head;
  
  while(head !== null) {
    head = head.next;
    count++;
  }
  const mid = Math.floor(count/2);
  
  for (let i = 0; i < mid; i++) {
    result = result.next;
  }
  
  return result;  
};


// Another Solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
  let fast = head;
  let slow = head;
  
  while(fast !== null) {
    
    if (fast.next === null) {
      break;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  
  return slow;
};