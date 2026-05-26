class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let subString = "";
        let left = 0;
        let sMap = {};
        let tMap = {};
        let have = 0;

        let result="";
        for (let str of t) {
            tMap[str] = (tMap[str] || 0) + 1;
        }
        let need = Object.keys(tMap).length;
        for (let right = 0; right < s.length; right++) {
            sMap[s[right]] = (sMap[s[right]] || 0) + 1;

            //check if char is satisfied
            if (tMap[s[right]] && sMap[s[right]] === tMap[s[right]]) {
                have++;
            }
            //if window is valid

            while (have == need) {
                if ((result === "" )|| (right - left + 1 < result.length)) {
                    result = s.slice(left, right + 1);
                }
                //shrink
                sMap[s[left]]--;
                if (tMap[s[left]] && sMap[s[left]] < tMap[s[left]]) {
                    have--;
                }
                left++;
            }
        }
        return result;
    }
}
