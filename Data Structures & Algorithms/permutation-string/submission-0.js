class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        //hash table for s1
        let s1_hash = {};
        let s2_hash = {};
        if (s2.length < s1.length) return false;
        for (let item of s1) {
            s1_hash[item] = (s1_hash[item] || 0) + 1;
        }
        for (let right = 0; right < s1.length; right++) {
            let r = s2[right];
            s2_hash[r] = (s2_hash[r] || 0) + 1;
        }
        //check if s1 hash and s2 hash are same return true else increase left to 1 remove left element from s2hash and go on
        if (this.same(s1_hash, s2_hash)) return true;
        let left = 0;
        for (let right = s1.length; right < s2.length; right++) {
            let r = s2[right];
            s2_hash[r] = (s2_hash[r] || 0) + 1;
            let l = s2[left];
            s2_hash[l]--;
            if (s2_hash[l] === 0) delete s2_hash[l];
            left++;
            if (this.same(s1_hash, s2_hash)) return true;
        }
        return false;
    }
    same = (a, b) => {
        const keysA = Object.keys(a);
        if (keysA.length !== Object.keys(b).length) return false;
        for (let k of keysA) {
            if (a[k] !== b[k]) return false;
        }
        return true;
    };
}
