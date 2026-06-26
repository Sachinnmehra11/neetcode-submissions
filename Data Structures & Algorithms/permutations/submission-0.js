class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result=[];
        this.dfs(nums,result,[]);
        return result;
    }

    dfs(nums,result,current){
        //base case 
        //if current lenght matches with nums return result
        if(current.length==nums.length){
            result.push([...current]);
            return;
        };
        //loop through nums
        for(let i=0;i<nums.length;i++){
            if(current.includes(nums[i])) continue;
            current.push(nums[i]);
            this.dfs(nums,result,current);
            current.pop();

        }
    }
}
