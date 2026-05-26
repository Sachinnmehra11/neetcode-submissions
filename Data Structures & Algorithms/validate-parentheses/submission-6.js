class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length%2!==0) return false;
        let openBracket=['(','{','['];
        let closeBracket=[')','}',']'];
        let newStack=[];
       for(let i=0;i<s.length;i++){
        if(s[i]=== "(" || s[i]==="{" || s[i] === "["){
            newStack.push(s[i])
        }else{
             if(s[i]=== ")" && newStack[newStack.length-1]=== "(" || s[i]==="}"&& newStack[newStack.length-1]=== "{" || s[i] === "]" && newStack[newStack.length-1]=== "["){
                newStack.pop() 
             }else{
                return false
             }
        }
       }
    return newStack.length === 0;;
    }
}
