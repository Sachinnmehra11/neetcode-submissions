class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded="";
        for(let str of strs){
            encoded+=str.length+ "#"+str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded=[];
        let i=0;
        while(i<str.length){
           let j=i;
            while(str[j]!== "#") j++;
            let len=parseInt(str.slice(i,j))
           decoded.push(str.slice(j+1,j+1+len))
           i=j+1+len;
        }
        return decoded;
    }
}
