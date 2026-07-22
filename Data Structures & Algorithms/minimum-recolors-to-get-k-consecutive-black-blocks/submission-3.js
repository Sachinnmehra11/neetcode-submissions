class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        //calc whites
        let white = 0;
        for (let i = 0; i < k; i++) {
            if (blocks[i] === "W") white++;
        }
        let minWhites = white;
        for (let right = k; right < blocks.length; right++) {
            if (blocks[right] === "W") white++;
            if (blocks[right - k] === "W") white--;
            minWhites = Math.min(white, minWhites);
        }
        return minWhites;
    }
}
