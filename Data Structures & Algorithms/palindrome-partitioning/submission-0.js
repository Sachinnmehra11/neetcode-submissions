//                         []

//                  startIndex = 0

//                 /               \

//           ["a"]               ["aa"]

//        start=1              start=2

//           |                    |

//      ["a","a"]            ["aa","b"]

//       start=2              start=3

//           |

//   ["a","a","b"]

//      start=3

class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let result=[];
        this.dfs(s,0,[],result);
        return result;
    }

    dfs(s, currentIndex, current, result) {
        //base case
        if (currentIndex == s.length) {
            result.push([...current]);
            return;
        }

        for (let end = currentIndex; end < s.length; end++) {
            let subString = s.slice(currentIndex, end + 1);
            if (!this.isPalindrome(subString)) continue;
            current.push(subString);
            this.dfs(s, end + 1, current, result);
            current.pop();
        }
    }

    isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;

        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }

        return true;
    }
}
