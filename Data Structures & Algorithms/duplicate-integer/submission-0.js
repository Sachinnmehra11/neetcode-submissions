class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsAsSet = new Set(nums);
        console.log(nums.length,numsAsSet.size)
        if(nums.length=== numsAsSet.size){
            return false
        }else{
            return true
        }

    }
}
