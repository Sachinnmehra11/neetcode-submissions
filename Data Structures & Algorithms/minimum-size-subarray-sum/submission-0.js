class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let left=0;
        let totalCount=Infinity;
        let count=0;
        let totalSum=0;
        for(let right=0;right<nums.length;right++){
            totalSum+=nums[right];
            while(totalSum>=target){
                totalCount=Math.min(totalCount,right-left+1);
                totalSum-=nums[left];
                left++;
            }
            
        }
       return totalCount === Infinity ? 0 : totalCount;
    }
}
