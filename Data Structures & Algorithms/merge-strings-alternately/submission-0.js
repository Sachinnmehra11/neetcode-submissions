class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let output="";
        let first=0;
        let second=0;
        while(first<word1.length&&second<word2.length){
            output=output+word1[first] + word2[second];
            first++;
            second++;
            
        }
        while(first!==word1.length){
            output+=word1[first];
            first++
        }
        while(second!==word2.length){
            output+=word2[second];
            second++
        }
        return output
    }
}
