class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        //using 2 twoSum
        let left=0;
        for(let left=0;left<nums.length-1;left++){
            for(let right=left+1;right<nums.length;right++){
                let currentSum=nums[left]+nums[right];
                if(target===currentSum){
                    return [left,right]
                }
            }
        }
        
    }
}
