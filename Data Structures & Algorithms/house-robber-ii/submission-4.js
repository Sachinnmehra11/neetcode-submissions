class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    //using 1D
    rob(nums) {
    if (nums.length === 1) return nums[0];
        function helper(subNums) {
            let dp = Array(subNums.length).fill(-1);

            function rec(index) {
                
                if (index >= subNums.length) return 0;
                if (dp[index] !== -1) return dp[index];

                let rob = subNums[index] + rec(index + 2);
                let skip = 0 + rec(index + 1);

                dp[index] = Math.max(rob, skip);
                return dp[index];
            }
            return rec(0);
        }

        let list1 = nums.slice(0, nums.length - 1);
        let list2 = nums.slice(1);

        return Math.max(helper(list1), helper(list2));
    }
}
