class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[0].length;j++){
                if(this.dfs(board,word,i,j,0)) return true;
            }
        }
        return false;
    }

    dfs(board, word, row, col, wordIndex) {
        //base cases
        if (wordIndex == word.length) return true;
        if (row < 0 || row >= board.length) return false; // row<0 can happen since we are calling recursivly all adjacent elements
        if (col < 0 || col >= board[0].length) return false;
        if (board[row][col] == "#") return false;
        if (board[row][col] !== word[wordIndex]) return false;
        board[row][col] = "#";
        //call dfs recursivly
        const found =
            this.dfs(board, word, row+1, col, wordIndex+1) ||
            this.dfs(board, word, row-1, col, wordIndex+1) ||
            this.dfs(board, word, row, col+1, wordIndex+1) ||
            this.dfs(board, word, row, col-1, wordIndex+1);
        board[row][col]=word[wordIndex];
        return found;
    }
}
