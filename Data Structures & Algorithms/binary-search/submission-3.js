class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0;
        let end = nums.length - 1;
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (target === nums[mid]) {
                return mid;
            } else if (target > nums[mid]) {
                //target is on the right side
                start = mid + 1;
            } else {
                //target on left side
                end = mid - 1;
            }
        }
        return -1;
    }
}
