class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let output=0;
        function backTrack(index,subset){
            let xorr=0;
            for(let nums of subset) xorr^=nums;
            output+=xorr;
            for(let i=index;i<nums.length;i++){
                subset.push(nums[i]);
                backTrack(i+1,subset);
                subset.pop();
            }
        }
        backTrack(0,[]);
        return output;
    }
}
