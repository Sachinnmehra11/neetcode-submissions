class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let l = 1;
        let r = x;
        let sqr = 0;
        while (l <= r) {
            const mid = Math.floor((l + r ) / 2);
            if (mid * mid > x) {
                r = mid - 1;
            } else if (mid * mid === x) {
                return mid;
            } else {
                l = mid + 1;
                sqr = mid;
            }
        }
        return sqr;
    }
}
