class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashmap={};
        for(let i=0; i<nums.length;i++){
           hashmap[nums[i]] = (hashmap[nums[i]] || 0) + 1;
        }
       return Object.entries(hashmap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(item => parseInt(item[0]))
    }
}
