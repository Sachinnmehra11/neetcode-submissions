class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        //using bfs
        let pacificVisited = Array.from({ length: heights.length }, () =>
            Array(heights[0].length).fill(false),
        );
        let atlanticVisited = Array.from({ length: heights.length }, () =>
            Array(heights[0].length).fill(false),
        );
        let output = [];
        let pacificQueue = [];
        let atlanticQueue = [];
        for (let row = 0; row < heights.length; row++) {
            for (let col = 0; col < heights[0].length; col++) {
                if (row == 0 || col == 0) {
                    pacificVisited[row][col] = true;
                    pacificQueue.push([row, col]);
                }
                if (row == heights.length - 1 || col == heights[0].length - 1) {
                    atlanticVisited[row][col] = true;
                    atlanticQueue.push([row, col]);
                }
            }
        }
        this.bfs(heights, pacificVisited, pacificQueue);
        this.bfs(heights, atlanticVisited, atlanticQueue);
        for (let row = 0; row < heights.length; row++) {
            for (let col = 0; col < heights[0].length; col++) {
                if (pacificVisited[row][col] && atlanticVisited[row][col]) {
                    output.push([row, col]);
                }
            }
        }
        return output;
    }

    bfs(heights, visited, queue) {
        while (queue.length > 0) {
            let [currentRow, currentCol] = queue.shift();
            let dist = [
                [0, 1],
                [0, -1],
                [1, 0],
                [-1, 0],
            ];

            for (let [r, c] of dist) {
                let newRow = r + currentRow;
                let newCol = c + currentCol;
                if (
                    newRow >= 0 &&
                    newRow < heights.length &&
                    newCol >= 0 &&
                    newCol < heights[0].length
                ) {
                    if (
                        !visited[newRow][newCol] &&
                        heights[newRow][newCol] >= heights[currentRow][currentCol]
                    ) {
                        visited[newRow][newCol] = true;
                        queue.push([newRow, newCol]);
                    }
                }
            }
        }
    }
}
