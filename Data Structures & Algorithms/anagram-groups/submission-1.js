class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       let groupAnagramArray={};
       let req=[]
       if (strs.length==1 ){
        return [strs];
       }
    for(let i=0;i<strs.length;i++){
        let sortedString= strs[i].split('').sort().join('');  //sort the strings
        if(!groupAnagramArray[sortedString]) 
        {
        groupAnagramArray[sortedString] = [];  // initialize to empty array
        }
        groupAnagramArray[sortedString].push(strs[i]);  // then push 
        
    }
    return Object.values(groupAnagramArray)    
    }     
    

    
}
