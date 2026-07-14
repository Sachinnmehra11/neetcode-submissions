class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let longest = "";
        const rec =(index, subString) =>{
            
            if (this.isPalindrome(subString, 0, subString.length - 1)) {
                if (subString.length > longest.length) longest = subString;
            }
            if (index === s.length) return;
            rec(index + 1, subString + s[index]);
        }
          for (let i = 0; i < s.length; i++) {
            rec(i, "");
        }
        return longest;
    }

     isPalindrome(s, left, right) {
        while (left < right) {
            if (s[left] === s[right]) {
                left++;
                right--;
            } else {
                return false;
            }
           
        }
         return true;
    }
}
