class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        //logic is we start from 0 and end while checking if start ==val then replace with end and increase start dec end;
        let start = 0;
        let end = nums.length - 1;
        while (start <= end) {
            if (nums[start] === val) {
                if (nums[end] !== val) {
                    nums[start] = nums[end];
                    start++;
                }
                end--;
            } else {
                start++;
            }
        }
        return start;
    }
}
