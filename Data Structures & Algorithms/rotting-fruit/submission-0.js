class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let queue = [];
        let freshOranges = 0;
        let totalMinutes = 0;
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] == 2) {
                    queue.push([row, col, 0]); //currentTime->0
                }
                if (grid[row][col] == 1) {
                    freshOranges++;
                }
            }
        }
        while (queue.length > 0) {
            let [qr, qc, minutes] = queue.shift();
            totalMinutes = minutes;
            let dir = [
                [0, 1],
                [0, -1],
                [1, 0],
                [-1, 0],
            ];
            for (let [dr, dc] of dir) {
                let newRow = dr + qr;
                let newCol = dc + qc;
                if (
                    newRow >= 0 &&
                    newRow < grid.length &&
                    newCol >= 0 &&
                    newCol < grid[0].length &&
                    grid[newRow][newCol] == 1
                ) {
                    grid[newRow][newCol] = 2;
                    freshOranges--;
                    queue.push([newRow, newCol, minutes + 1]);
                }
            }
        }
        return freshOranges === 0 ? totalMinutes : -1;
    }
}
