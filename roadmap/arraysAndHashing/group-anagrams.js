https://leetcode.com/problems/group-anagrams/description/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
O(n * m log m)
var groupAnagrams = function(strs) {

    const dict = {}

    var sortAlphabets = function(text) {
    return text.split('').sort().join('');
};

    for(let i = 0; i < strs.length; i+=1){
        let sorted = sortAlphabets(strs[i])
        if(dict[sorted]){
            dict[sorted].push(strs[i])
        } else {
            dict[sorted] = [strs[i]]
        }
    }
    
    return Object.values(dict)
};

Opmitized to O(n * m)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};

    for(let i = 0; i < strs.length; i+=1){
        let stringWithLetterCode = new Array(26).fill(0);

        for(let j = 0; j < strs[i].length; j+=1){
            let letterPosition = strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0);

            stringWithLetterCode[letterPosition] += 1
        }

        if(map[stringWithLetterCode]){
            map[stringWithLetterCode].push(strs[i])
        } else {
            map[stringWithLetterCode] = [strs[i]]
        }
    }

    return Object.values(map)
};
