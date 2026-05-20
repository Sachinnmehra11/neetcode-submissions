class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    //using hashset
    longestConsecutive(nums) {
        if(nums.length == 0) return 0;
        let set= new Set(nums);
        let longest=1;
        for(let num of nums){
            if(!set.has(num-1)){
                let currSeq=1;
                let currNum=num;
                while(set.has(currNum+1)){
                    currSeq++;
                    currNum++;
                }
                longest=Math.max(longest,currSeq)
            }
        }
        return longest;
    }
}
