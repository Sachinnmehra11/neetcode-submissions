class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let start = 0;
        let end = nums.length - 1;

        let minumum = Infinity;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            minumum = Math.min(minumum, nums[mid]);
            if (nums[mid] > nums[end]) {
                //mid is bigger so minimum will be on right side
                start = mid + 1;
            } else {
                //mid is smaller so minimum will be on left side
                end = mid - 1;
            }
        }
        return minumum;
    }
}
