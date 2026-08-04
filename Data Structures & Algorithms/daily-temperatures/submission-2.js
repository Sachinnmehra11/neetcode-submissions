class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        //using stack
        let n=temperatures.length
        let stack=[];
        let result= new Array(n).fill(0);
        for(let i=0;i<n;i++){
            const t=temperatures[i];
            while(stack.length>0&& stack[stack.length-1][0]<t){
                const [cTemp,cIndex]=stack.pop();
                result[cIndex]=i-cIndex;
            }
            stack.push([t,i]);
        }
        return result;
    }
}
