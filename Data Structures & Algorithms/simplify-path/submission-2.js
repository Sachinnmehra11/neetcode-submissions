class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let stack = [];
        let curr = "";
        for (let file of path +"/") {
            if (file === "/") {
                if (curr === "..") {
                    //need to go to parent folder
                    if (stack.length) stack.pop();
                } else if (curr !== "." && curr !== "") {
                    stack.push(curr);
                }
                curr = "";
            } else {
                curr += file;
            }
            
        }
        return "/" + stack.join("/");
    }
}
