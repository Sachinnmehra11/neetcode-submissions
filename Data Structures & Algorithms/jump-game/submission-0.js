class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
         let dp = Array(nums.length).fill(undefined);
    function rec(index) {

        if (index > nums.length - 1) return false;
        if (index === nums.length - 1) return true;
        if (dp[index] !== undefined) return dp[index];
        //choices

        for (let i = 1; i <= nums[index]; i++) {
            //no of jumps we can make

            if (rec(index + i)) {
                return dp[index] = true
            }

        }
        return dp[index] = false;
    }
    return rec(0);
    }
}
