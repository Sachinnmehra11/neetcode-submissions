class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left = Math.max(...weights);
        let right = weights.reduce((a, b) => a + b, 0);
        let res = right;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            let currCap = mid;
            let ship = 1;
            for (let weight of weights) {
                if (currCap - weight < 0) {
                    ship++;
                    currCap = mid;
                }

                currCap -= weight;
            }
            if (ship > days) {
                left = mid + 1;
            } else {
                res = Math.min(res, mid);
                right = mid - 1;
            }
        }
        return res;
    }
}
