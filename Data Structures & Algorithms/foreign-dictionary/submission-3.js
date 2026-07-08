class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        //create adjList
        let adjList = new Map();
        let inDegree = new Map();

        // Initialize map for unique characters
        for (let word of words) {
            for (let char of word) {
                if (!adjList.has(char)) adjList.set(char, []);
                if (!inDegree.has(char)) inDegree.set(char, 0); //setting indegree to 0->char
            }
        }
        //traverse through words
        for (let i = 0; i < words.length - 1; i++) {
            let findDiff = false;
            let firstWord = words[i];
            let secondWord = words[i + 1];
            let len = Math.min(firstWord.length, secondWord.length); //take small word length
            //iterate through words
            for (let start = 0; start < len; start++) {
                if (firstWord[start] !== secondWord[start]) {
                    //add this node to adjList
                    let u = firstWord[start];
                    let v = secondWord[start];
                    if (!adjList.get(u).includes(v)) {
                        adjList.get(u).push(v);
                        inDegree.set(v, inDegree.get(v) + 1); // Increment count
                    }
                    findDiff = true;
                    break;
                }
            }
            if (!findDiff && firstWord.length > secondWord.length) {
                return "";
            }
        }
        //using bfs -> kahn algo topological sort;
        let queue = [];
        let result = [];
        //go through adjList and check whose indegree is 0;
        for (let [char, count] of inDegree.entries()) {
            if (count == 0) queue.push(char);
        }
        while (queue.length > 0) {
            let currentNode = queue.shift();
            result.push(currentNode);
            for (let neibhour of adjList.get(currentNode)) {
                inDegree.set(neibhour, inDegree.get(neibhour) - 1);
                if (inDegree.get(neibhour) === 0) {
                    queue.push(neibhour);
                }
            }
        }
        return result.length === adjList.size ? result.join("") : "";
    }
}
