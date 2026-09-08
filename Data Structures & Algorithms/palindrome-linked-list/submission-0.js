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
    isPalindrome(head) {
        let slow=head;
        let fast=head;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next;
        }
        //slow is the middle element now;
        let prev=null;
        let current=slow;
        while(current){
            let temp= current.next;
            current.next=prev; //link to prev value
            prev=current;
            current=temp
        }
        //check the values
        let left=head;
        let right=prev;
        while(right){
            if(left.val!==right.val){
                return false
            }
            left=left.next;
            right=right.next;
        }
        return true;

    }
}
