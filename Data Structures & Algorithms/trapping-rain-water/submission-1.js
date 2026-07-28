class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        //complexity (O(3n)==> O(n)) space complexity => O(2N) -> 2 array used
        let maxLeft = new Array(height.length);
        let maxRight = new Array(height.length);
        let n=height.length;
        maxLeft[0] = height[0];
        for (let i = 1; i < n; i++) {
            maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
        }
        maxRight[n-1]=height[n-1];
        for(let i=n-2;i>=0;i--){
            maxRight[i]=Math.max(maxRight[i+1],height[i])
        }
        let waterTrapped=0;
        for(let i=0;i<n;i++){
            waterTrapped+=Math.min(maxLeft[i],maxRight[i])-height[i];
        }
        return waterTrapped;
    }
}
