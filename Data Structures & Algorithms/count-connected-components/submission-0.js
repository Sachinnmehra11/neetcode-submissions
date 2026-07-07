class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adjList = [];
        let count = 0;
        let visited = Array(n).fill(false);
        for (let i = 0; i < n; i++) {
            adjList.push([]);
        }
        for (let i = 0; i < edges.length; i++) {
            let u = edges[i][0];
            let v = edges[i][1];
            adjList[u].push(v);
            adjList[v].push(u);
        }
        let queue = [];
        for (let i = 0; i < adjList.length; i++) {
            if (!visited[i]) {
                this.bfs(adjList, i, visited, queue);
                count++;
            }
        }
        return count;
    }

    bfs(adjList, node, visited, queue) {
        visited[node] = true;
        queue.push(node);
        while (queue.length > 0) {
            let currentNode = queue.shift();
            for (let neibhour of adjList[currentNode]) {
                if (!visited[neibhour]) {
                    visited[neibhour] = true;
                    queue.push(neibhour);
                }
            }
        }
    }
}
