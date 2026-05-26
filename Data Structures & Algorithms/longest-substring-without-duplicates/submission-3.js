class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest=0;
        let left=0;
        let stringWindow={};
        for(let right=0;right<s.length;right++){
            stringWindow[s[right]]= (stringWindow[s[right]]||0)+1;
            while(stringWindow[s[right]]>1){
                stringWindow[s[left]]--;
                left++; 
                
            }
            longest= Math.max(longest,right-left+1)
        }
        return longest;

    }
}
