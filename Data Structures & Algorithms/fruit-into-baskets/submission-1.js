class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        let map= new Map();
        let left=0;
        let right=0;
        let total=0;
        let res=0;
        while(right<fruits.length){
            map.set(fruits[right],(map.get(fruits[right])||0)+1);
            total++;
            while(map.size>2){
                map.set(fruits[left],map.get(fruits[left])-1);
                total--;
                if(map.get(fruits[left])===0){
                    map.delete(fruits[left]);
                }
                left++;
            }
            right++;
            res=Math.max(res,total);
        }
        return res;
    }
}
