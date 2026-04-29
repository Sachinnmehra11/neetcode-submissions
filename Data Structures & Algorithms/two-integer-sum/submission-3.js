class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i=0;i<nums.length-1;i++){
            for(let start=i+1;start<nums.length;start++){
                if(nums[start]+nums[i]==target){
                    return [start,i];
                }
            } 
        }
    }
}
