class MedianFinder {
    constructor() {
        this.left = new MaxPriorityQueue();
        this.right = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        //if left is empty and num> front of left heap
        if (this.left.isEmpty() || num < this.left.front()) {
            this.left.enqueue(num);
        } else {
            this.right.enqueue(num);
        }
        //condition : difference in elements between both queue should not greater then 1;
        if (this.left.size() > this.right.size() + 1) {
            this.right.enqueue(this.left.dequeue());
        } else if (this.right.size() > this.left.size() + 1) {
            this.left.enqueue(this.right.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.left.size() > this.right.size()) {
            return this.left.front();
        } else if (this.right.size() > this.left.size()) {
            return this.right.front();
        } else {
            return (this.left.front() + this.right.front()) / 2.0;
        }
    }
}
