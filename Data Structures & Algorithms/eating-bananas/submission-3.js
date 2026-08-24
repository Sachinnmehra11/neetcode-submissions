class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles.sort((a, b) => a - b);
        let left = 0;
        let right = piles[piles.length - 1];
        let k=right;
        while(left<=right){
            const mid= Math.floor((left+right)/2);
            let totalhour=0;
            for(let pile of piles){
                totalhour+=Math.ceil(pile/mid);
            }
            if(totalhour>h){
                //increase the left
                left=mid+1;
            }else{
                //can try less
                k=mid;
                right=mid-1;

            }
        }
        return k
    }
}
