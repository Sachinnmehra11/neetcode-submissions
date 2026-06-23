class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result=[];
         this.backTracking(nums,target,0,[],result);
         return result;
    }

    backTracking(nums,target,startIndex=0,current,result){
        //base condition
        if(target==0){
            result.push([...current]);
            return;
        }
        for(let i= startIndex;i<nums.length;i++){
            if(nums[i]<=target){
                current.push(nums[i]);
                this.backTracking(nums,target-nums[i],i,current,result);
                current.pop();
            }
        }
    }
}
