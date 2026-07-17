class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let candidate=0;
        let count=0;
        for(let num of nums){
            if(count===0){
                candidate=num;
            }
            count+=(candidate===num)?1:-1;
        }
        return candidate;
    }
}
