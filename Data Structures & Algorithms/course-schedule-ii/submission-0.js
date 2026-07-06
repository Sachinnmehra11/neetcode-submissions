class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        //numcourser -> V  prerequisites => edges
        let visited = Array(numCourses).fill(false);
        let pathVisited = Array(numCourses).fill(false);
        let adjList = [];
        let ans = [];
        let stack = [];
        for (let i = 0; i < numCourses; i++) {
            adjList.push([]);
        }
        let hasCycle = { value: false };
        for (let i = 0; i < prerequisites.length; i++) {
            let u = prerequisites[i][1];
            let w = prerequisites[i][0];
            adjList[u].push(w);
        }
        for (let i = 0; i < adjList.length; i++) {
            if (!visited[i]) {
                this.dfs(i, adjList, visited, stack, pathVisited, hasCycle);
            }
            if (hasCycle.value) return [];
        }
        while (stack.length > 0) {
            ans.push(stack.pop());
        }
        return ans;
    }
    dfs(node, adjList, visited, stack, pathVisited, hasCycle) {
        if (pathVisited[node]) {
            hasCycle.value = true; // Cycle detected!
            return;
        }
        if (visited[node]) return;
        visited[node] = true;
        pathVisited[node] = true;
        for (let neibhour of adjList[node]) {
            this.dfs(neibhour, adjList, visited, stack, pathVisited, hasCycle);
        }
        pathVisited[node] = false;
        stack.push(node);
    }
}
