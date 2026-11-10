function firstNonRepeating(str) {
  let arr = str?.split("");
  let seen = {}

  for(let i=0;i<arr.length;i++){   
   seen[arr[i]] = (seen[arr[i]]||0)+1;
  }
   for(let i=0;i<arr.length;i++){
    if(seen[arr[i]]===1){
      return arr[i]||null
    }
   }
}

// console.log(firstNonRepeating('aabbcdeff'));
// console.log(firstNonRepeating('aabbcc'));
// console.log(firstNonRepeating('javascript'));

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]

const findIndices=(arr,target)=>{
const seen = new Map();
for(let i=0;i<arr.length;i++){
  let complement = target - arr[i];

  if(seen.has(complement)){
   return [seen.get(complement),i]
  }
  seen.set(arr[i],i)
}
return []
}

console.log(findIndices([2, 7, 11, 15],9))