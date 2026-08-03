class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */

    evalRPN(tokens) {
        let stack = [];
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === "/") {
                let ele = stack.pop();
                let ele2 = stack.pop();
                stack.push(Math.trunc(ele2 / ele));
            } else if (tokens[i] === "+") {
                let ele = stack.pop();
                let ele2 = stack.pop();
                stack.push(ele2 + ele);
            } else if (tokens[i] === "-") {
                let ele = stack.pop();
                let ele2 = stack.pop();
                stack.push(ele2 - ele);
            } else if (tokens[i] === "*") {
                let ele = stack.pop();
                let ele2 = stack.pop();
                stack.push(ele * ele2);
            } else {
                stack.push(parseInt(tokens[i]));
            }
        }
        return stack.pop();
    }
}
