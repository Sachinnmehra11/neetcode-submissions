class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let left=0;
        let right=x;
        let res=x;
        while(left<=right){
            let mid= Math.floor((left+right)/2);
            if(mid*mid>x){
                right=mid-1;
            }else{
                res=mid;
                left=mid+1;
            }
        }
        return res;
    }
}
