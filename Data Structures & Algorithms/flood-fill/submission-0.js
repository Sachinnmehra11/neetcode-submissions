class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        let visited = Array.from({ length: image.length }, () =>
            Array(image[0].length).fill(false),
        );
        let currentImage = image[sr][sc];
        this.dfs(image, color, currentImage, visited, sr, sc);
        return image;
    }

    dfs(image, color, currentImage, visited, row, col) {
        visited[row][col] = true;
        image[row][col] = color;
        let dir = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ]; //neibhours cordinates
        for (let [dr, dc] of dir) {
            let newRow = row + dr;
            let newCol = col + dc;

            if (
                newRow >= 0 &&
                newRow < image.length &&
                newCol >= 0 &&
                newCol < image[0].length &&
                image[newRow][newCol] === currentImage &&
                !visited[newRow][newCol]
            ) {
                this.dfs(image, color, currentImage, visited, newRow, newCol);
            }
        }
    }
}
