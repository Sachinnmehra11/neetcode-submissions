class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area=0;
        let right=heights.length-1;
        let left=0;
        while(left!=right){
            let currentArea=Math.min(heights[left],heights[right])*(right-left)
            area=Math.max(area,currentArea)
            if(heights[left]<heights[right]){
                left++
            }
            else{
                right--;
                
            }
            
        }
        return area
        
    }
}
