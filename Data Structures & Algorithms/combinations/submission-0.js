class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let result = [];
        this.dfs(n, k, [], result, 1);
        return result;
    }

    dfs(n, k, current, result, currentIndex) {
        //base case
        if ((current.length == k)) {
            result.push([...current]);
            return;
        }
        for(let i=currentIndex;i<=n;i++){
            current.push(i);
            this.dfs(n,k,current,result,i+1);
            current.pop();
        }
    }
}
