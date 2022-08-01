/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  let fast = head;
  let slow = head;
  
  while(fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      slow = head;
      
      while (slow !== fast) {
        fast = fast.next;
        slow = slow.next;
      }
      return slow;
    }
  }
  
  return null;
};

