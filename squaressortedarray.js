//  https://leetcode.com/problems/squares-of-a-sorted-array/ 

// Dont use a-b in string use reverse function
var sortedSquares = function(nums) {
    return nums.map((val)=>val**2).sort((a,b)=>{return a-b});

};