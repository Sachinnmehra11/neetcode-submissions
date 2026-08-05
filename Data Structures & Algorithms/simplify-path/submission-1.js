class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let stack = [];
        let cur = "";
        for (let c of path + "/") {
            if (c === "/") { //current folder ended
                if (cur === "..") {
                    //need to go to parent
                    if (stack.length) stack.pop();
                } else if (cur !== "" && cur !== ".") {
                    stack.push(cur);
                }
                cur = "";
            } else {
                //valid file name
                cur += c;
            }
        }
        return "/" + stack.join("/");
    }
}
