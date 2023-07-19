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
