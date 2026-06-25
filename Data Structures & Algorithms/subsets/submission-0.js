class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];
        this.addSets(nums, result, 0, []);
        return result;
    }

    addSets(nums, result, index, current) {
        //base case
        if (index >= nums.length) {
            result.push([...current]);
            return;
        }
        current.push(nums[index]);
        this.addSets(nums, result, index + 1, current);
        current.pop();
        this.addSets(nums, result, index + 1, current);
    }
}
