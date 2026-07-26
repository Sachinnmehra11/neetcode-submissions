class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        let sum = 0;
        for (let operation of operations) {
            if (operation === "+") {
                const top = stack.pop();
                const newTop = top + stack[stack.length - 1];
                stack.push(top);
                stack.push(newTop);
                sum+=newTop;
            } else if (operation === "D") {
                stack.push(2 * stack[stack.length - 1]);
                sum += stack[stack.length - 1];
            } else if (operation === "C") {
                sum-=stack.pop();
            } else {
                stack.push(parseInt(operation));
                sum += stack[stack.length - 1];
            }
        }
        return sum;
    }
}
