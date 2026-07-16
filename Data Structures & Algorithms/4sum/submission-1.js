class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        let output = [];
        nums = nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            for (let j = i + 1; j < nums.length - 1; j++) {
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;
                let start = j + 1;
                let end = nums.length - 1;
                while (start < end) {
                    if (nums[i] + nums[j] + nums[start] + nums[end] === target) {
                        output.push([nums[i], nums[j], nums[start], nums[end]]);
                        start++;
                        end--;
                        while (start < end && nums[start] === nums[start - 1]) start++;
                        while (start < end && nums[end] === nums[end + 1]) end--;
                    } else if (nums[i] + nums[j] + nums[start] + nums[end] > target) {
                        end--;
                    } else {
                        start++;
                    }
                }
            }
        }
        return output;
    }
}
