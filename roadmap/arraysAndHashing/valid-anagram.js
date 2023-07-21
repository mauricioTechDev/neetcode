//https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    // creat t map keys as letter value the ammount
    let sMap = {};
    // Create t map
    // Before adding key validate it exist is sMap if not return false
    // add the key and increment the value
    // the valaue is not grater than that of the sMap
    let tMap = {};
    for(let i = 0; i < s.length; i+=1){
        //create sMap
        if(sMap[s[i]]){
            sMap[s[i]]+=1
        } else {
            sMap[s[i]] = 1
        }
        // Create tMap
        if(tMap[t[i]]){
            tMap[t[i]]+=1
        } else {
            tMap[t[i]] = 1
        }
    }

    for(const key in sMap){
        if(sMap[key] !== tMap[key]){
            return false
        }
    }
    return true
    
};
