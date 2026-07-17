class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map={};
        for(let i=0;i<nums.length;i++){
            map[nums[i]]= (map[nums[i]]||0)+1;
        }
        const maxKey = Object.keys(map).reduce((a, b) => map[a] > map[b] ? a : b);
        return maxKey

    }
}
