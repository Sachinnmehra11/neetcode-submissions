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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        //using dummy pointer;
        let dummy=  new ListNode(0);
        let current=head;
        let output = dummy;
        while(current){
            if(current.val==val){
                current=current.next;
            }else{
                dummy.next=current;
                dummy=dummy.next;
                current=current.next;
            }
        }
        dummy.next=null;
       return output.next;
    }
}
