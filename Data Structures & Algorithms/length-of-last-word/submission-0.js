class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let length = 0;
        let i = s.length - 1;

        // Skip spaces at the end
        while (i >= 0 && s[i] === ' ') {
            i--;
        }

        // Count letters in the last word
        while (i >= 0 && s[i] !== ' ') {
            length++;
            i--;
        }

        return length;
    }
}
