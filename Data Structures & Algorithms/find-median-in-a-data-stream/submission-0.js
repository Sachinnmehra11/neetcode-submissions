class MedianFinder {
    constructor() {
        this.data=[];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        //using array
        this.data.push(num);
    }

    /**
     * @return {number}
     */
    findMedian() {
        this.data.sort((a,b)=>a-b);
        let n=this.data.length;
        if(n%2==0){
            return (this.data[n/2]+ this.data[n/2 -1])/2;
        }else{
            return this.data[Math.floor(n/2)];
        }
    }
}
