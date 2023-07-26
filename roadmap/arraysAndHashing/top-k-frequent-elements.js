/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// https://leetcode.com/problems/top-k-frequent-elements/description/
var topKFrequent = function(nums, k) {
    let map = {}

    for(let i = 0; i < nums.length; i+=1){
        if(map[nums[i]]){
            map[nums[i]] += 1
        } else {
            map[nums[i]] = 1
        }
    }

    let sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);    
    let res = []

    for(let j = 0; j < k; j+=1){
        res.push(Number(sorted[j][0]))
    }

    return res
};
