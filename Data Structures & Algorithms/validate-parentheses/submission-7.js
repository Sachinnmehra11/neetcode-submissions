class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let parenMap = {
            "{": "}",
            "[": "]",
            "(": ")",
        };
        let parenStack=[];
        for(let i=0;i<s.length;i++){
         if(parenMap.hasOwnProperty(s[i])){
            parenStack.push(s[i])
           }else{
            if(s[i]===parenMap[parenStack[parenStack.length-1]]){
                parenStack.pop()
            }else{
                return false
            }
           }
        }
        return parenStack.length===0;
    }
}
