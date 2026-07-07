class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    //
    validTree(n, edges) {
        let visited = Array(n).fill(false);
        let adjList = [];
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
        if (!this.bfs(adjList, 0, queue, visited)) {
            //cycle detected immediatly invalid
            return false;
        } //run bfs one to find cycle
        for (let i = 0; i < adjList.length; i++) {
            if (!visited[i]) return false;
        }
        return true;
    }
    bfs(adjList, node, queue, visited) {
        visited[node] = true;
        queue.push([node, -1]);
        while (queue.length > 0) {
            let [currentNode, parentNode] = queue.shift();
            for (let neibhour of adjList[currentNode]) {
                if (!visited[neibhour]) {
                    visited[neibhour] = true;
                    queue.push([neibhour, currentNode]);
                } else if (visited[neibhour] && neibhour !== parentNode) {
                    //means cycle detected
                    return false;
                }
            }
        }
        return true;
    }
}
