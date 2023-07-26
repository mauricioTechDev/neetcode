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

// Improve to O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();

    for(let i = 0; i < nums.length; i+=1){
        if(map.has(nums[i])){
            let currentCount = map.get(nums[i])
            map.set(nums[i], currentCount + 1)
        } else {
            map.set(nums[i], 1)
        }
    }

    let bucketSort = new Array(nums.length + 1).fill(0);

    map.forEach((value, key, map) => {
        if(bucketSort[value] !== 0){
            bucketSort[value].push(key)
        } else {
            bucketSort[value] = [key]
        }
    })

    let ans = []
    for(let j = bucketSort.length - 1; j >= 0; j-=1){

        if(ans.length == k) return ans
        if(bucketSort[j] !== 0){
            ans = [...ans, ...bucketSort[j]];
        }
    }
};
