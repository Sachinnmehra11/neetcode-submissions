class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let hash= {}; //creating an empty object in which will insert key as starings value and values as difference between no of times letter repeat 
        if (s.length!=t.length) return false;
        for(let i=0; i<s.length;i++){
            hash[s[i]]= (hash[s[i]]||0)+1; // if char in s exist then increasing its value by 1
            hash[t[i]]= (hash[t[i]]||0)-1; // if char in t exist then decreasing it by 1
        }
        for (let key in hash){
            if(hash[key]!==0) return false;     //if key value is greater than 0 means some letter is repeated and it can't be an anagram
        }
        return true;
}
}
