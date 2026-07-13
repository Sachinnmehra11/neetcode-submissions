class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        let dp = Array(n + 1).fill(-1);
        function rec(index) {
            if (index <= 2) return index === 0 ? 0 : 1;
            if (dp[index] !== -1) return dp[index];
            dp[index] = rec(index - 1) + rec(index - 2) + rec(index - 3);
            return dp[index];
        }
        return rec(n);
    }
}
