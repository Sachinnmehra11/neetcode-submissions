class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit=0;
        for(let buyDay=0; buyDay<prices.length-1;buyDay++){
            for(let sellDay=buyDay+1; sellDay<prices.length;sellDay++){
                if(prices[sellDay]-prices[buyDay]>profit){
                    profit=prices[sellDay]-prices[buyDay];
                    console.log(profit)
                }
            }
        }
        return profit
    }
}
