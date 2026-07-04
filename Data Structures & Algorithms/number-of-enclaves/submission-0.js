class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    numEnclaves(grid) {
        //using bfs
    let queue = [];
    let count = 0;
    //traverse through grid
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            //add bounderies land to the queue
            if ((row == 0 || col == 0 || row == grid.length - 1 || col == grid[0].length - 1) && grid[row][col] === 1) {
                queue.push([row, col]);
                grid[row][col] = 0;
            }
        }
    };
    while (queue.length > 0) {
        let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        let [cr, cc] = queue.shift();
        for (let [r, c] of dir) {

            let newRow = cr + r;
            let newCol = cc + c;
            if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length && grid[newRow][newCol] === 1) {
                grid[newRow][newCol] = 0;
                queue.push([newRow, newCol]);
            }
        }
    }
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                count++;
            }
        }
    };
    return count;
    }
}
