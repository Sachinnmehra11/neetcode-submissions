class Solution {
    /**
     * @param {number[]} cardPoints
     * @param {number} k
     * @return {number}
     */
    maxScore(cardPoints, k) {
        let leftSum = 0;
        let rightSum = 0;
        let rightIndex = cardPoints.length - 1;
        for (let i = 0; i < k; i++) {
            leftSum += cardPoints[i];
        }
        let maxSum = leftSum;
        //loop through i=k-1 till 0
        for (let i = k - 1; i >= 0; i--) {
            //remove ith element and add from right;
            leftSum = leftSum - cardPoints[i];
            rightSum += cardPoints[rightIndex];
            rightIndex--;
            maxSum = Math.max(maxSum, leftSum+rightSum);
        }
        return maxSum;
    }
}
