class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let total = 0;
        let visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(false));

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                //if current island is not visited
                if (!visited[row][col] && grid[row][col] == 1) {
                    total++;
                    this.bfs(grid, row, col, visited);
                }
            }
        }
        return total;
    }
    bfs(grid, row, col, visited) {
        let queue = [];
        let dir = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ]; //4 neibhours cells
        visited[row][col] = true;
        queue.push([row, col]);
        while (queue.length > 0) {
            let [currentRow, currentCol] = queue.shift();
            //iterate through neibhours
            for (let [dr, dc] of dir) {
                let newRow = currentRow + dr;
                let newCol = currentCol + dc;
                //checks for invalid neibhour
                if (
                    newRow >= 0 &&
                    newCol >= 0 &&
                    newRow < grid.length &&
                    newCol < grid[0].length &&
                    !visited[newRow][newCol] &&
                    grid[newRow][newCol] == "1"
                ) {
                    queue.push([newRow, newCol]);
                    visited[newRow][newCol] = true;
                }
            }
        }
    }
}
