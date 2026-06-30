class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a,b)=>a-b);
        for(let i=0;i<nums.length;i++){
            if(i>0 && nums[i-1]==nums[i]) return true
        };
        return false
    }
}
