class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // A matrix where every row is an array of size 2 (for false and true)
let dp = Array.from({ length: nums.length + 1 }, () => Array(2).fill(-1));

// To read or write, you use two brackets:
// dp[index][0] -> Cache for when startedAtZero is false
// dp[index][1] -> Cache for when startedAtZero is true
        function rec(index,startedAtZero){
            //base case
            if(index==nums.length-1&&startedAtZero) return 0;
            if(index>=nums.length) return 0;

            //base case
            let flagBit = startedAtZero ? 1 : 0;
            
            // Check the 2D cache grid
            if (dp[index][flagBit] !== -1) return dp[index][flagBit];
            let rob=nums[index]+rec(index+2,startedAtZero);
            let skip=0+rec(index+1,startedAtZero);
            dp[index][flagBit] = Math.max(rob, skip);
            return dp[index][flagBit]
        }
        let robFirstHouse=nums[0]+rec(2,true);
        let robSecndHouse=rec(1,false);
        return Math.max(robFirstHouse,robSecndHouse)
    }
}
