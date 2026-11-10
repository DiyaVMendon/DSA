// Find the maximum sum of any contiguous subarray of size k.
const maxSubarraySum=(arr,k)=>{
    if(k<=0||!Number.isInteger(k)||k>arr.length){
        return null;
    }
    let currentLength=0;
    
    for(i=0;i<k;i++){
        currentLength = currentLength + arr[i];
    }

    let maxSum=currentLength;

    for(i=k;i<arr.length;i++){
      currentLength = currentLength - arr[i-k]+arr[i]
      maxSum = Math.max(currentLength,maxSum)
    }
    return maxSum
}


// console.log(maxSubarraySum([1,2,3,4,5], 2));

// Write a JavaScript function to find the length of the longest substring that contains no repeating characters.


function longestUniqueSubstring(str) {

let seen = new Set()
let left=0
let maxLength=0
    for(let i=0;i<str.length;i++){
        while(seen.has(str[i])){
            seen.delete(str[left])
            left++
        }
        seen.add(str[i])

        let currentLength = i-left+1
        maxLength = Math.max(maxLength,currentLength)
    }
return maxLength

}

// console.log(longestUniqueSubstring('abcabcbb')); // 3
// console.log(longestUniqueSubstring('bbbbb'));    // 1
// console.log(longestUniqueSubstring('pwwkew'));   // 3
// console.log(longestUniqueSubstring(''));         // 0


// Write a function that converts a nested array into a single flat array.


function flattenArray(arr) {
    let result=[]
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
        result.push(...(flattenArray(arr[i])))
    }else{
        result.push(arr[i])
    }
  }
  return result
}

// console.log(flattenArray([1, [2, [3, [4, 5]], 6]]));
// console.log(flattenArray([[1, 2], [3, [4, 5]], 6]));
// console.log(flattenArray([1, [], [2, [3]], 4]));

// Given an unsorted array of integers, find the smallest positive integer missing from the array.
// Input: [1, 2, 0]
// Output: 3

// Input: [3, 4, -1, 1]
// Output: 2

// Input: [7, 8, 9, 11, 12]
// Output: 1

// Input: [1, 1, 2, 2]
// Output: 3

function firstMissingPositive(nums) {

  for(let i=1;i<=nums?.length;i++){
    if(!nums.includes(i)){
           return i
    }
    
  }
  return nums.length+1
}

// console.log(firstMissingPositive([1, 2, 0])); // 3
// console.log(firstMissingPositive([3, 4, -1, 1])); // 2
// console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1
// console.log(firstMissingPositive([1, 1, 2, 2])); // 3
// console.log(firstMissingPositive([1, 2, 3])); // 4


function firstMissingPositive(nums) {
  const seen = new Set(nums);
// console.log(seen)
  for(let i=1;i<=nums.length;i++){
    if(!seen.has(i)){
        return i;
    }
  }
return nums.length+1
}

// console.log(firstMissingPositive([1, 2, 0])); // 3
// console.log(firstMissingPositive([3, 4, -1, 1])); // 2
// console.log(firstMissingPositive([1, 2, 3])); // 4


// Given an array of integers, return a new array where each element is the product of all other elements except itself.
// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]

// Explanation:
// - Index 0 → 2 × 3 × 4 = 24
// - Index 1 → 1 × 3 × 4 = 12
// - Index 2 → 1 × 2 × 4 = 8
// - Index 3 → 1 × 2 × 3 = 6


function productExceptSelf(nums,i) {
  let result=[]
 for(let i=0;i<nums.length;i++){
     let product=1;

     for(let j=0;j<nums.length;j++){
        if(i!==j){
            product*=nums[j]
        }
     }
  result.push(product)
    }

   
 
return result
}

console.log(productExceptSelf([1, 2, 3, 4]));
// [24, 12, 8, 6]

// console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// [0, 0, 9, 0, 0]


function productExceptSelf(nums) {
  let result = new Array(nums.length).fill(1);


  let leftProduct = 1;
  for (let i = 0; i < nums.length; i++) {

   
    result[i] = leftProduct;
    leftProduct *= nums[i];

  }
  console.log(result,leftProduct,"L")
//   console.log(leftProduct)

  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *=rightProduct;
    rightProduct *=nums[i]
  }

  console.log(rightProduct,result,"R")

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));