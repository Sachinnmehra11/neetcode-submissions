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
        let current=head;
        let count=0;
        while(current!=null){
            count++;
            current=current.next;
        }
        let nodeToDelete= count-n;
        let start=0;
        let itr=head;
        let prev=null;
        if (count === n) {
    return head.next;
}
        while(start!=nodeToDelete){
            prev=itr;
            itr=itr.next;
            start++;
        }
        if(start==nodeToDelete){
            prev.next=itr.next;
        }
        return head
    }
}
