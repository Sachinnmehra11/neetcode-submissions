public class Solution {
    public bool hasDuplicate(int[] nums) {
        Array.Sort(nums);
        for(int i=0;i<nums.Length;i++){
            if(i>0 && nums[i]==nums[i-1]){
                return true;
            }
        }
        return false;
    }
}