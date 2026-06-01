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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let interval = 1;

        while (interval < lists.length) {
            for (let i = 0; i + interval < lists.length; i += interval * 2) {
                lists[i] = this.mergeSortedList(lists[i], lists[i + interval]);
            }

            interval *= 2;
        }
        if (lists.length === 0) return null;
        return lists[0];
    }

    mergeSortedList(list1, list2) {
        let iList1 = list1;
        let iList2 = list2;
        let dummyNode = new ListNode(0);
        let current = dummyNode;
        while (iList1 && iList2) {
            if (iList1.val <= iList2.val) {
                current.next = iList1;
                iList1 = iList1.next;
            } else {
                current.next = iList2;
                iList2 = iList2.next;
            }
            current = current.next;
        }
        current.next = iList1 || iList2;
        return dummyNode.next;
    }
}
