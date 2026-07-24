class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let left = 0;
        let right = 1;
        let k = 0;
        while (right < nums.length) {
            if (nums[left] == nums[right]) {
                right++;
            } else {
                left++;
                nums[left] = nums[right];
                right++;
            }
        }
        nums.length = left + 1;
        return nums.length;
    }
}
