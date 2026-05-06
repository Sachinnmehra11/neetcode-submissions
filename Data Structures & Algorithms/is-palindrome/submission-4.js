class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       s= s.replace(/[^a-zA-Z0-9]/ig,"");
       s=s.toLowerCase();
       let left = 0;
       let right = s.length-1;
       while(left<=right){
        if(s[left]==s[right]){
            left++;
            right--;
        }else{
            return false;
        }
       }
       
        return true;
       


    }
}
