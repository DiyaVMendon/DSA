// Find the maximum sum of any contiguous subarray of size k.
// function maxSubarraySum(arr, k) {
//    if( !Number.isInteger(k)||k<=0||k>arr.length){
//     return null
//    }

//    let windowsum=0;

//    for(let i=0;i<k;i++){
//     windowsum += arr[i];
//    }

//    let maxsum=windowsum;

//    for(i=k;i<arr.length;i++){
//     windowsum = windowsum-arr[i-k]+arr[i];
//     maxsum = Math.max(windowsum,maxsum)
//    }
//    return maxsum;
// }

// console.log(maxSubarraySum([-2,-1,-3], 2));


// Write a JavaScript function to find the length of the longest substring that contains no repeating characters.

//  Input: "abcabcbb"
// Output: 3
// // "abc" has no repeating characters

// Input: "bbbbb"
// Output: 1
// // "b"

// Input: "pwwkew"
// Output: 3
// // "wke"

// Input: ""
// Output: 0

function longestUniqueSubstring(str) {
  let arr = str
  let seen = new Set()
  let left=0;
  let maxLength=0;
  for(let i=0;i<arr.length;i++){
     while(seen.has(arr[i])){
         
        seen.delete(arr[left])
        left++
     }
        seen.add(arr[i])
    
  let currentLength = i - left + 1;
  maxLength = Math.max(maxLength, currentLength);

  console.log(left)
  }

  return maxLength
}

console.log(longestUniqueSubstring('abcabcbb')); // 3
// console.log(longestUniqueSubstring('bbbbb'));    // 1
// console.log(longestUniqueSubstring('pwwkew'));   // 3
// console.log(longestUniqueSubstring(''));         // 0

// Write a JavaScript function that groups words containing the same characters, regardless of their order.

function groupAnagrams(words) {


     let result=  words.reduce((res,obj)=>{
        let key=obj?.split("").sort().join("");
       
         return{
            ...res,
            [key]:[
                ...(res[key]||[]),obj
            ]
         }
        
        },{})

        return Object.values(result)

 
}

console.log(groupAnagrams([
  'eat', 'tea', 'tan', 'ate', 'nat', 'bat'
]));