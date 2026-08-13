class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        function bs(nums, target, left, right) {
            let mid = Math.floor((left + right) / 2);
            if (left > right) return -1;
            if (nums[mid] === target) return mid;
            if (nums[mid] < target) {
                //target is in right part
                return bs(nums, target, mid+1, right);
            } else {
                //target can be in left part
                return bs(nums, target, left, mid-1);
            }
        }
        return bs(nums,target,0,nums.length-1);
    }
}
