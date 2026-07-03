class Solution {
    /**
     * @param {number[][]} isConnected
     * @return {number}
     */
    //using dfs
    findCircleNum(isConnected) {
        let output = 0;
        let n = isConnected.length;
        let visited = Array(n).fill(false);
        let adjList = this.adjList(isConnected, n); //adjList: [[1],[0],[]]
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                output++;
                this.dfs(adjList, i, visited);
            }
        }
        return output;
    }

    dfs(adjList, node, visited) {
        visited[node] = true;
        for (let neibhours of adjList[node]) {
            if (!visited[neibhours]) {
                this.dfs(adjList, neibhours, visited);
            }
        }
    }

    adjList(isConnected, n) {
        let adjList = [];
        for (let i = 0; i < n; i++) {
            adjList.push([]);
        }
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                if (isConnected[row][col] === 1) {
                    adjList[row].push(col);
                }
            }
        }
        return adjList;
    }
}
