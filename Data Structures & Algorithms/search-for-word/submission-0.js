class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                if (this.dfs(board, word, row, col, 0)) return true;
            }
        }
        return false;
    }

    dfs(board, word, row, col, wordIndex) {
        if (wordIndex === word.length) return true; // ✅) return true;
        if (row < 0 || row >= board.length) return false; // no row left
        if (col < 0 || col >= board[0].length) return false; //no col left
        if (board[row][col] == "#") return false;
        if (board[row][col] !== word[wordIndex]) return false;
        board[row][col] = "#";
        //check up
        const found =
            this.dfs(board, word, row - 1, col, wordIndex + 1) ||
            this.dfs(board, word, row + 1, col, wordIndex + 1) ||
            this.dfs(board, word, row, col - 1, wordIndex + 1) ||
            this.dfs(board, word, row, col + 1, wordIndex + 1);
        board[row][col] = word[wordIndex];
        return found;
    }
}
