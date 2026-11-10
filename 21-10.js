
// Given an unsorted array of integers, find the length of the longest sequence of consecutive numbers.
// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Consecutive sequence: 1, 2, 3, 4

function longestConsecutive(nums) {
  let maxLength=0

  let seen = new Set(nums);

  for(let num of seen){
    // console.log(num)
    if(!seen?.has(num-1)){
        let currentLength=1;
        let currentNum = num;
// console.log(seen.has(currentNum+1))
        while(seen.has(currentNum+1)){
            currentNum=currentNum+1
            currentLength++
           
            //  console.log(currentLength)
        }
        
        maxLength= Math.max(currentLength,maxLength)
    }
  }

return maxLength

  
}

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
// console.log(longestConsecutive([1, 2, 2, 3])); // 3
// console.log(longestConsecutive([])); // 0


// Problem statement
// Given an array of integers nums and a number k, find the total number of contiguous subarrays whose sum equals k.

// A contiguous subarray means the elements must be next to each other in the original array.

// Input	k	Output
// [1, 2, 3]	3	2
// [1, -1, 0]	0	3
// [3, 4, 7, 2, -3, 1, 4, 2]	7	4
// [1, 1, 1]	5	0
// []	0	0

function subarraySum(nums, k) {
    
    let count=0
  for(let i=0;i<nums.length;i++){
    let sum=0
    for(let j=i;j<nums.length;j++){
        sum +=nums[j]
        // console.log(sum,"sum")
    if(sum===k){
    count++
    }
    }
  }
  return count
}

// console.log(subarraySum([1, 1, 1], 2)); // 2
// console.log(subarraySum([1, 2, 3], 3)); // 2
// console.log(subarraySum([1, -1, 0], 0)); // 3


function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;

  const prefixMap = new Map();
  prefixMap.set(0, 1);

  for (let num of nums) {
    sum += num;

    // Find how many earlier prefix sums equal sum - k
    if (prefixMap.has(sum - k)) {
      count += prefixMap.get(sum - k);
    }

    // Record the current prefix sum
    prefixMap.set(sum, (prefixMap.get(sum) || 0) + 1);
  }

  return count;
}

// console.log(subarraySum([1, 1, 1], 2)); // 2
// console.log(subarraySum([1, 2, 3], 3)); // 2
// console.log(subarraySum([1, -1, 0], 0)); // 3


// Problem statement
// Given an array of integers nums, find the majority element.

// Input: nums = [3, 2, 3]
// Output: 3

// Input: nums = [2, 2, 1, 1, 1, 2, 2]
// Output: 2


function majorityElement(nums) {
   const exp = nums.reduce((res,obj)=>{
    res[obj]=(res[obj]||0)+1
    return res
   },{})
    
   for(let [key,value] of Object.entries(exp)){
      if(value>nums.length/2){
        return Number(key)
      }
    
   }

}

// console.log(majorityElement([3, 2, 3])); // 3
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
// console.log(majorityElement([5, 5, 5, 2, 3])); // 5


// Problem statement
// Given an array of integers nums and an integer k, return the length of the longest contiguous subarray whose sum equals k.
// Input: nums = [1, 2, 3, 1, 1, 1, 1], k = 3
// Output: 3


function longestSubarray(nums, k) {
  
let maxLength=0;
    for(let i=0;i<nums.length;i++){
        let result=[];
        let sum=0;
for(j=i;j<nums.length;j++){
    sum+=nums[j];
    result.push(nums[j])
    let currentLength=0;
    if(sum===k){
         currentLength=result.length;
    }

    maxLength = Math.max(currentLength,maxLength)
}

    }

    return maxLength
}

// console.log(longestSubarray([1, 2, 3, 1, 1, 1, 1], 3)); // 3
// console.log(longestSubarray([1, -1, 5, -2, 3], 3)); // 4
// console.log(longestSubarray([-2, -1, 2, 1], 1)); // 2



function longestSubarray(nums, k) {
 let sum=0;
 let maxLength=0;
 let prefix=new Map();
 prefix.set(0,-1)
 
for(let i=0;i<nums.length;i++){
    sum +=nums[i];

    if(prefix.has(sum-k)){
         let previousIndex = prefix.get(sum-k);

         let currentLength = i-previousIndex
         maxLength = Math.max(maxLength, currentLength);
    }

      if (!prefix.has(sum)) {
      prefix.set(sum, i);
    }
}
 

 return maxLength
}

// console.log(longestSubarray([1, 2, 3, 1, 1, 1, 1], 3)); // 3
// console.log(longestSubarray([1, -1, 5, -2, 3], 3)); // 4
console.log(longestSubarray([-2, -1, 2, 1], 1)); // 2


function debounce(fn, delay) {
  let timer;
  return(...args)=>{
    clearTimeout(timer)
    timer=setTimeout(() => {
        fn(...args)
    }, delay);
    
  }
}
const search = debounce((value) => {
  console.log("Searching:", value);
}, 500);

search("R");
search("Re");
search("Rea");
search("Reac");
search("React");

// If all calls happen within 500 ms,
// only "Searching: React" should be logged.

 

const log = throttle((value) => {
  console.log(value);
}, 1000);

log('A'); // Execute immediately
log('B'); // Ignore
log('C'); // Ignore