class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles.sort((a,b)=>a-b);
        let left=0;
        let right =piles[piles.length-1];
        let res=right;
        while(left<=right){
            const mid= Math.floor((left+right)/2);
            let totalHour=0;
            for(let pile of piles){
                totalHour+=Math.ceil(pile/mid);
            }
            if(totalHour>h){
                //need to increaase left
                left=mid+1
            }else{
                //get the ans try more;
                res=mid;
                right=mid-1
            }
        }
        return res;
    }
}
