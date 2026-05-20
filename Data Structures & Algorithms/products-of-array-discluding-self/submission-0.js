class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [];
        let suffix = [];
        let output=[];
        prefix[0] = 1;

        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }
        suffix[nums.length - 1] = 1;
        for (let i = nums.length - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1];
        }
        for (let itr = 0; itr < nums.length; itr++) {
            output.push(prefix[itr] * suffix[itr]);
        }
        return output;
    }
}
