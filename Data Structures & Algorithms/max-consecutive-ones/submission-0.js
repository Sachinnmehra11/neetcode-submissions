class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let start = 0;
        let maxCon = 0;
        let count = 0;
        while (start < nums.length) {
            if (nums[start] === 1) {
                //increase count
                count++;
            } else {
                count = 0;
            }
            start++;
            maxCon = Math.max(maxCon, count);
        }
        return maxCon;
    }
}
