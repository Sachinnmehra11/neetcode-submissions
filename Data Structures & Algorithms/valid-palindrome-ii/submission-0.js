class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            if (s[left] !== s[right]) {
                return (
                    this.isPalindrome(s, left + 1, right) || this.isPalindrome(s, left, right - 1)
                );
            } else {
                left++;
                right--;
            }
        }
        return true;
    }

    isPalindrome(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            } else {
                left++;
                right--;
            }
        }
        return true;
    }
}
