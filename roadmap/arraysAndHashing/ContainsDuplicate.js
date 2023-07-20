/**
 * @param {number[]} nums
 * @return {boolean}
 */
//https://leetcode.com/problems/contains-duplicate/description/

var containsDuplicate = function(nums) {
    let map = {}

    for(let i = 0; i < nums.length; i+=1){
        let el = nums[i].toString()
        if(map[el]){
            return true
        } else {
            map[el] = el
        }
    }
    return false
};

// refactored using a hash set
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashSet = new Set()

    for(let i = 0; i < nums.length; i+=1){
        let number = nums[i];
        if(hashSet.has(number)){
            return true;
        }
        hashSet.add(number)
    }
    return false
};
