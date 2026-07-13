class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let dp = Array(nums.length).fill(-1);
        function jumpRec(index) {
            //base case
            let minJump = Infinity;

            if (index === nums.length - 1) return 0; //if at the end steps would be zero
            if (dp[index] !== -1) return dp[index];
            const end = Math.min(nums.length - 1, index + nums[index]);
            //starting -> nums[0] => we have nums[0] choices to makee
            for (let i = index + 1; i <= end; i++) {
                minJump = Math.min(minJump, 1 + jumpRec(i));
            }
            return (dp[index] = minJump);
        }
        return jumpRec(0);
    }
}
