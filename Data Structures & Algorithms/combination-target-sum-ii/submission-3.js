class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let result = [];
        candidates.sort((a, b) => a - b);
        this.sum(candidates, target, 0, [], result);

        return result;
    }
    sum(candidates, target, currentIndex, current, result) {
        if (target == 0) {
            result.push([...current]);

            return;
        }
        for (let i = currentIndex; i < candidates.length; i++) {
            if (candidates[i] > target) break;
            if (i > currentIndex && candidates[i] === candidates[i - 1]) continue;
            current.push(candidates[i]);
            this.sum(candidates, target - candidates[i], i + 1, current, result);
            current.pop();
        }
    }
}
