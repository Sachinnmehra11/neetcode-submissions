class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a,b)=>a-b);
        let sortedNums=[...new Set(nums)];
        let diffArr=[];
        console.log(sortedNums);
        let seq=0;
        let currSeq=0;
        if (nums.length==0) return 0;
        if(nums.length==1) return 1;
        for(let i=1;i<sortedNums.length;i++){
            diffArr.push(sortedNums[i]-sortedNums[i-1])
        }
        console.log(diffArr)
        for(let j=0;j<diffArr.length;j++){
           
            if(diffArr[j]==1){
                currSeq=currSeq+1;
            }else{
                seq=Math.max(seq,currSeq);
                currSeq=0;
            }
        }
        seq = Math.max(seq, currSeq);
        return seq+1
        
    }
}
