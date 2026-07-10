class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let dp = Array(n + 1).fill(-1);
        function rec(totalRemainingSteps) {
            //base case
            if (totalRemainingSteps === 0) return 1;
            if (totalRemainingSteps < 0) return 0;
            if (dp[totalRemainingSteps] !== -1) return dp[totalRemainingSteps];

            //choices
            let take1Step = rec(totalRemainingSteps - 1);
            let take2Step = rec(totalRemainingSteps - 2);
            dp[totalRemainingSteps] = take1Step + take2Step;
            return dp[totalRemainingSteps];
        }
        return rec(n);
    }
}
