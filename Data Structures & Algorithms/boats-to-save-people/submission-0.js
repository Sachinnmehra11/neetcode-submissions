class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let totalBoats = 0;
        people.sort((a, b) => a - b);
        let left = 0;
        let right = people.length - 1;
        while (left <= right) {
            let weight = people[left] + people[right];
            if (weight > limit) {
                //take the heavist one
                right--;
                totalBoats++;
            } else {
                left++;
                right--;
                totalBoats++;
            }
        }
        return totalBoats;
    }
}
