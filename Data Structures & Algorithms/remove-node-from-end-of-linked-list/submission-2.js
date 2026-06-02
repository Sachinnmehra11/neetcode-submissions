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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        //will use 2 pointers 
        let dummyNode = new ListNode(0);
        dummyNode.next=head;
        let left=dummyNode;
        let right=head;
        while(n>0){
            right=right.next;
            n--;
        }
        while(right){ //right will reach at the last node and left will be 1 step away from nth Node
            right=right.next;
            left=left.next;
        }
        //need to unlink next node from left
        left.next=left.next.next;
        return dummyNode.next;   
    }
}
