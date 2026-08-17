class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let start=0;
        let end=nums.length-1;
        let res= nums.length;
        while(start<=end){
            const mid = Math.floor((start+end)/2);
          
            if(nums[mid]===target) return mid;
            else if (nums[mid]<target){
                start=mid+1;                                            
            }else{
                res=mid;
                end=mid-1;
            }
        }
        return res;
    }
}
