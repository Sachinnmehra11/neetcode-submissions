class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left=0;
        let right=nums.length-1;
        while(left<=right){
            let mid=Math.floor((left+right)/2);

           if(nums[mid] === target) return mid;
            //check if left part is sorted
            if(nums[mid]>=nums[left]){
                //check if target is in left part
                if(target>=nums[left]&& target<nums[mid]){
                    right=mid-1;
                }else{
                    left=mid+1
                }
            }else{ //right part is sorted
                if(target>nums[mid]&& target<=nums[right]){
                    left=mid+1;
                }else{
                    right=mid-1;
                }
            }
        }
        return -1
    }
}
