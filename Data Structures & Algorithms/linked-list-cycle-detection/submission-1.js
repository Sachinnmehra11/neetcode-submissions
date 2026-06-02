/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        //for this we will use slow and fast pointer if there's is a cycle in a linkedlist eventually fast pointer will meet with slow pointer
        let fast = head;
        let slow = head;
        while (fast && fast.next != null) { //check if fast is not null and next of fast is not null basically till end of list
            slow = slow.next;
            fast = fast.next.next;
            if (fast == slow) { //checking fast and slow are equal then return true;
                return true;
            }
        }

        return false;
    }
}
