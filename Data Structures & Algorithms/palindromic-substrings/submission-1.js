class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;
        function isPalindrome(string) {
            let left = 0;
            let right = string.length - 1;
            while (left < right) {
                if (string[left] !== string[right]) {
                    return false;
                } else {
                    left++;
                    right--;
                }
            }
            return true;
        }
        function rec(substring, index) {
            if (isPalindrome(substring)) {
                count += 1;
            }
            //base case

            if (index + 1 >= s.length) return;

            rec(substring + s[index + 1], index + 1);
        }
        for (let i = 0; i < s.length; i++) {
            rec(s[i], i);
        }
        return count;
    }
}
