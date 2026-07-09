class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let dp = Array(n + 1).fill(-1);
        function stairsRec(remainingStairs) {
            //base cases
            if (remainingStairs === 0) {
                return 1;
            }

            if (remainingStairs < 0) return 0;
            if (dp[remainingStairs] !== -1) return dp[remainingStairs];
            //make choices
            //go 1 step
            let oneStep = stairsRec(remainingStairs - 1);
            let twoStep = stairsRec(remainingStairs - 2);
            dp[remainingStairs] = oneStep + twoStep;
            return dp[remainingStairs];
        }
        return stairsRec(n);
    }
}
