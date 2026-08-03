class MyStack {
    constructor() {
        this.q=[];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.q.push(x);
        let sz= this.q.length;
        for(let i=0;i<sz-1;i++){
            this.q.push(this.q[0]);
            this.q.shift();
        }
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.q.length>0) return this.q.shift();
    }

    /**
     * @return {number}
     */
    top() {
        if(this.q.length===0) return -1;
        return this.q[0];
    }

    /**
     * @return {boolean}
     */
    empty() {
         if (this.q.length === 0) return true;
        return false;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
