class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest=0;
        let left=0;
        let maxFreq=0;
        let hashMap= {};
        for(let right=0;right<s.length;right++){
            hashMap[s[right]]= (hashMap[s[right]]||0)+1;
            console.log(hashMap)
            maxFreq = Math.max(maxFreq, hashMap[s[right]]);
            if(right-left+1-maxFreq>k){ //invalid window
                hashMap[s[left]]--;
                left++
            }
            longest= Math.max(longest,right - left + 1)
        }
        return longest;
    }
}
