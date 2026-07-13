class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let dp=Array(cost.length).fill(-1);
        function rec(index){
            if(index>=cost.length) return 0;
            if(dp[index]!==-1) return dp[index];
            //choices
            //take one step
            let takeOneStep=cost[index]+rec(index+1);
            let takeTwoStep=cost[index]+rec(index+2);
            return dp[index]=Math.min(takeOneStep,takeTwoStep)
        }
        let startFromZero=rec(0);
        let startFromFirst=rec(1);
        return Math.min(startFromZero,startFromFirst)
    }
}
