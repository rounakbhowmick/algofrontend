// https://leetcode.com/problems/majority-element/
var majorityElement = function(nums) {

    //Approach 1
    //     let freq={}
    
    //     for(let i=0;i<nums.length;i++){
    //         freq[nums[i]]=(freq[nums[i]]|0)+1;
    //         if(freq[nums[i]]>nums.length/2){
    //             console.log("hh",nums[i])
    //             return nums[i] ;
    //         }
    //     }
    //Approach 2
         nums.sort((a,b) => a - b);
        return nums[Math.floor(nums.length/2)];
    };