class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let res=Math.max(...weights);
        while(true){
            let ship=1;
            let capacity=res;
            for(let w of weights){
                if(capacity-w<0){
                    //done for the days
                    ship++;
                    capacity=res;
                }
                capacity-=w
            }
            if(ship<=days){
                return res;
            }
            res++
        }

    }
}
