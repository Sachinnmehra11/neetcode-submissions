class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left= Math.max(...weights)
        let right = weights.reduce((a, b) => a + b, 0);
        let res = right;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            let currentCap = mid;
            let ship = 1;
            for (let weight of weights) {
                if (currentCap - weight < 0) {
                    ship++;
                    currentCap = mid;
                }
                currentCap -= weight;
            }
            if(ship<=days){
                res=Math.min(res,mid);
                right=mid-1;
            }else{
                left=mid+1;
            }
        }
        return res;
    }
}
