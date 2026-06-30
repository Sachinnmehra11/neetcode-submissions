class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
      let ans=[...nums];
      let i=0;
      while(i!=nums.length){
        ans.push([nums[i]]);
        i++;
      }
      return ans;
    }
}
