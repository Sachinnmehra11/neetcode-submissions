class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let result=[];
        nums.sort((a,b)=>a-b);
        this.dfsPermute(nums,0,[],result);
        return result;
    }


    dfsPermute(nums,currentIndex,current,result,used=[]){
        //base case
        if(current.length==nums.length){
            result.push([...current])
        }
        //choices to make
        for(let i= 0;i<nums.length;i++){
            if(used[i]) continue;
            if(i>0 && nums[i-1]==nums[i] && !used[i-1]) continue; //skip duplicates
            used[i]=true
            current.push(nums[i]);
            this.dfsPermute(nums,currentIndex+1,current,result,used);
            used[i]=false
            current.pop()
        }
    }
}
