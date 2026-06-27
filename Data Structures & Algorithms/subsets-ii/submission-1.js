class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a,b)=> a-b);
        let result=[[]]
        this.dfs(nums,result,[],0);
        return result
    }

    dfs(nums, result, current, start) {
        for (let i = start; i < nums.length; i++) {
            if (i === start || nums[i] !== nums[i - 1]) {
                current.push(nums[i]);
                result.push([...current]);
                this.dfs(nums, result, current, i + 1);
                current.pop();
            }
        }
    }
}
