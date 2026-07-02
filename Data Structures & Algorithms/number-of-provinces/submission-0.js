class Solution {
    /**
     * @param {number[][]} isConnected
     * @return {number}
     */
    findCircleNum(isConnected) {
        let adjList = this.adjList(isConnected);
        let visited = Array(adjList.length).fill(false);
        let provinces = 0;
        //do bfs search;
        let queue = [];

        console.log(adjList);
        for (let i = 0; i < adjList.length; i++) {
            if (!visited[i]) {
                provinces++;
                queue.push(i);
                visited[i] = true;
                while (queue.length > 0) {
                    let node = queue.shift();

                    for (let neibhours of adjList[node]) {
                        if (!visited[neibhours]) {
                            visited[neibhours] = true;
                            queue.push(neibhours);
                        }
                    }
                }
            }
        }

        return provinces;
    }

    adjList(isConnected) {
        let adjList = [];
        for (let i = 0; i < isConnected.length; i++) {
            adjList.push([]);
        }
        for (let i = 0; i < isConnected.length; i++) {
            for (let j = 0; j < isConnected.length; j++) {
                if (isConnected[i][j] === 1 && i != j) {
                    adjList[i].push(j);
                }
            }
        }
        return adjList;
    }
}
