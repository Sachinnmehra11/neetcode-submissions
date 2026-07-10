class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let dp=Array(nums.length+1).fill(-1);
        function rec(index){
            //base case
            if(index>=nums.length) return 0; //last house you cant rob any money
            if(dp[index]!==-1) return dp[index];
            //rob 1st house and move
            let rob=nums[index]+rec(index+2);
            //skip house and move
            let skip=0+rec(index+1);
            dp[index]=Math.max(rob,skip);
            return dp[index]
        }
       return rec(0);
    }
}
