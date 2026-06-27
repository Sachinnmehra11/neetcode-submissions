class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result=[];
        this.parenthesis_dfs(n,result,'',0,0);
        return result;
    }

    parenthesis_dfs(n,result,current,open,close){
        //when to stop
        if(current.length==n*2) {
            result.push(current);
            return;
        }
        if(close<open){
            this.parenthesis_dfs(n,result,current+')',open,close+1);
        }
        if(open<n){
            this.parenthesis_dfs(n,result,current+'(',open+1,close);
        }
       

    }
}
