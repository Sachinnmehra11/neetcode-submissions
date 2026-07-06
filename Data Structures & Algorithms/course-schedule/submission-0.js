class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        //V -> numCourses edges -> prerequisites
        let visited = Array(numCourses).fill(false);
        let stack = [];
        let adjList = [];
        let pathVisited = Array(numCourses).fill(false);
        let isCycle = {
            value: false,
        };
        for (let i = 0; i < numCourses; i++) {
            adjList.push([]);
        }
        for (let i = 0; i < prerequisites.length; i++) {
            let u = prerequisites[i][1];
            let w = prerequisites[i][0];
            adjList[u].push(w);
        }
        for (let i = 0; i < adjList.length; i++) {
            if (!visited[i]) {
                this.dfs(i, adjList, pathVisited, visited, isCycle, stack);
            }
            if (isCycle.value) return false;
        }
        if (stack.length > 0) {
            return true;
        }
    }
    dfs(node, adjList, pathVisited, visited, isCycle, stack) {
        if (pathVisited[node]) {
            isCycle.value = true;
            return;
        }
        if (visited[node]) return true;
        visited[node] = true;
        pathVisited[node] = true;
        for (let neibhour of adjList[node]) {
            this.dfs(neibhour, adjList, pathVisited, visited, isCycle, stack);
        }
        pathVisited[node] = false;
        stack.push(node);
    }
}
