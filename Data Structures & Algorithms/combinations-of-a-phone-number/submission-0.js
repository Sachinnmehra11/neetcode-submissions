class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
     map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
};
    letterCombinations(digits) {
        let result=[];
        if(!digits) return [];
        this.dfs(digits,result,'',0);
        return result;
    }

    dfs(digits,result,current,currentDigit){
        //base case
        if(current.length==digits.length){
            result.push(current);
            return
        }
        let letters = this.map[ digits[currentDigit] ]
        //choices to make
        for(let currentChar of letters){
             this.dfs(digits,result,current+ currentChar,currentDigit+1)
        }      
    }
}
