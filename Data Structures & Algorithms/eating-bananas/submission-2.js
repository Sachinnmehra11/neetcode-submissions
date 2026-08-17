class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles.sort((a,b)=> a-b);
        let start=0;
        let end=piles[piles.length-1];
        let k = end;
        while(start<=end){
            const mid= Math.floor((start+end)/2);
            let time=0;
            for(let i=0;i<piles.length;i++){
                time+= Math.ceil(piles[i]/mid);
            }
            if(time>h){
                //too slow increase eating speed/hr
                start=mid+1;
            }else{
                //we are good try to decrease speed if we can find less
                k=mid;
                end=mid-1;
            }
        }
        return k;
    }
}
