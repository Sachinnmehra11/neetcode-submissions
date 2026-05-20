class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest=0;
        let set= new Set();
        let left=0;
        for(let right=0;right <s.length;right++){
            while(set.has(s[right])){
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
            longest=Math.max(longest,right-left+1);
        }
        return longest;
    }
}
