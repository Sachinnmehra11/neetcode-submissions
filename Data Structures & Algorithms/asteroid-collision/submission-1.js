class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];
        for (let asteroid of asteroids) {
            if (stack.length === 0) {
                stack.push(asteroid);
            } else {
                if (
                    (asteroid > 0 && stack[stack.length - 1] > 0) ||
                    (asteroid < 0 && stack[stack.length - 1] < 0)
                ) {
                    stack.push(asteroid);
                }
                // Opposite directions but moving away from each other
                else if (
                    stack[stack.length - 1] < 0 &&
                    asteroid > 0
                ) {
                    stack.push(asteroid);
                } else {
                    let asteroidDestroyed = false;

                    // Added while because one asteroid can cause multiple collisions
                    while (
                        stack.length > 0 &&
                        stack[stack.length - 1] > 0 &&
                        asteroid < 0
                    ) {
                        if (
                            Math.abs(stack[stack.length - 1]) >
                            Math.abs(asteroid)
                        ) {
                            asteroidDestroyed = true;
                            break;
                        } else if (
                            Math.abs(stack[stack.length - 1]) <
                            Math.abs(asteroid)
                        ) {
                            // Don't push yet because another collision may happen
                            stack.pop();
                        } else {
                            stack.pop();
                            asteroidDestroyed = true;
                            break;
                        }
                    }

                    // Current asteroid survived all collisions
                    if (!asteroidDestroyed) {
                        stack.push(asteroid);
                    }
                }
            }
        }

        return stack;
    }
}