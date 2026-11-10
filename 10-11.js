// Count Even and Odd Digits

// Easy

// Given a number, count how many digits are even and how many are odd.
// Input

// 123456

// Expected output

// Even: 3, Odd: 3

// let nums = 123456;
// let evenCount=0;
// let oddCount=0;

// while(nums>0){
//     let lastDigit = nums%10;
//     if(lastDigit%2===0){
//         evenCount++;
//     }else{
//         oddCount++;
//     }
//     nums = Math.floor(nums/10);
// }
// console.log("Even: "+evenCount+", Odd: "+oddCount);

// Problem 2: Given a number, calculate the sum of its even digits.

// let nums = 123456;

// // Expected Output: 12
// // Explanation: 2 + 4 + 6 = 12
// let sum=0;
// while(nums>0){
//     let lastDigit = nums%10;
//     if(lastDigit%2===0){
//         sum += lastDigit;
//     }
//     nums=Math.floor(nums/10);
// }
// console.log("Sum of even digits: "+sum);

// Problem 3: Find the Largest Digit
// Question: Given a positive integer, find the largest digit without converting it to a string or using arrays.
// let nums = 58329;

// // Expected Output: 9

// let largestDigit = 0;

// while(nums>0){
//     let lastDigit = nums%10;
//     if(lastDigit>largestDigit){
//         largestDigit =lastDigit;
//     }
//     nums = Math.floor(nums/10)
// }
// console.log("Largest Digit: "+largestDigit);

// Problem 4: Count Occurrences of a Digit
// Question: Given a number and a target digit, count how many times that digit appears.

// let nums = 122333;
// let target = 3;

// Expected Output: 3

// let count =0;

// while(nums>0){
//     let lastDigit =nums%10;
//      if(lastDigit === target){
//         count++;
//      }

//     nums=Math.floor(nums/10);
// }

// console.log("Occurrences of "+target+": "+count);

// Problem 5: Armstrong Number
// Difficulty: Medium

// An Armstrong number is a number equal to the sum of its digits, each raised to the power of the total number of digits.

// For example, 153 is an Armstrong number because:
// \[
// 1^3+5^3+3^3=153
// \]

// let nums = 153;

// // Expected Output: Armstrong Number
// let sums = 0;
// let originalNum = nums;
// let numDigits = Math.floor(Math.log10(nums)) + 1; // Calculate the number of digits
// while(nums>0){
//     let lastDigit =nums%10;
//     sums +=Math.pow(lastDigit,numDigits);

//     nums=Math.floor(nums/10);
// }

// if(sums === originalNum){
//     console.log("Armstrong Number");
// }else{
//     console.log("Not an Armstrong Number");
// }

// Problem 6: Check Prime Number
// Difficulty: Easy

// Write a JavaScript program to check whether a number is prime.

// A prime number is a number greater than 1 that has exactly two positive factors: 1 and itself.

// let nums = 17;

// // Expected Output: Prime Number

// let nums = 17;
// let isPrime = true;

// if (nums <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i <= Math.sqrt(nums); i++) {
//         if (nums % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if (isPrime) {
//     console.log("Prime Number");
// } else {
//     console.log("Not a Prime Number");
// }

// Problem 7: Print Prime Numbers from 1 to N
// Now use the same concept to print all prime numbers between 1 and 20.

// let n = 20;

// // Expected Output:
// // 2 3 5 7 11 13 17 19

// for (let i = 2; i <= n; i++) {
//   let isPrime = true;

//   if (i <= 1) {
//     isPrime = false;
//   } else {
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isPrime = false;
//       }
//     }
//   }

//   if(isPrime) {
//     console.log(i);
//   }
// }

// Problem 8: Find All Factors of a Number
// Difficulty: Easy

// Write a JavaScript program to print all positive factors of a given number.

// A factor is a number that divides another number exactly, without leaving a remainder.
// let nums = 12;

// Expected Output:
// 1
// 2
// 3
// 4
// 6
// 12


// for (let i = 1; i <= Math.sqrt(nums); i++) {
//   if (nums % i === 0) {
//     console.log(i);
//     if (i !== nums / i) {
//       console.log(nums / i);
//     }
//   }
// }

// Problem 9: Check Perfect Number
// Medium
// A perfect number is a positive integer equal to the sum of all its positive factors, excluding the number itself.

// For example, 28:
// \[
// 1+2+4+7+14=28
// \]

// let nums = 28;
// let sum = 0;

// // Expected Output:
// // Perfect Number

// for(let i=0;i<=nums/2;i++){
//     if(nums%i===0){
//         sum +=i;
//     }
// }

// if(sum === nums){
//     console.log("Perfect Number");
// }else{
//     console.log("Not Perfect Number")
// }


// Problem 10: Count Trailing Zeros in Factorial
// Medium
// Given a positive integer n, find how many zeros appear at the end of n!.

// function fact(n){
//     return n===0?1:n*fact(n-1);
// }

// function countTrailingZeros(n){
//     let count = 0 
//     let factorial = fact(n);
//    console.log(factorial);
//    while(factorial>0 ){
//      let lastDigit = factorial%10;
//     if(lastDigit === 0){
//     count++;
//     }else{
//         break;
//     }
//     factorial = Math.floor(factorial/10);
   
 
// }
//  return count;
// }
// console.log(countTrailingZeros(10)); // Output: 1

// Problem 11: Fibonacci Series Using Recursion
// Write a JavaScript program to print the first n Fibonacci numbers.

// let n = 7;

// // Expected Output:
// // 0 1 1 2 3 5 8

// const fiboncii = (n)=>{
//   if(n===0) return 0;
//   if(n===1) return 1;
//   return fiboncii(n-1)+fiboncii(n-2)
// }

// for(let i=0;i<n;i++){
//     console.log(fiboncii(i))
// }

// Problem 12: Sum of First N Natural Numbers Using Recursion
// Easy
// Write a recursive JavaScript function to calculate the sum of natural numbers from 1 to n.

// For example:

// let n = 5;

// Expected Output: 15
// 1 + 2 + 3 + 4 + 5 = 15


// const sumOfNaturalNumbers=(n)=>{
//     if(n===0){
//         return 0;
//     }
//     if(n===1){
//         return 1;
//     }
//    return n+sumOfNaturalNumbers(n-1)
// }
// console.log(sumOfNaturalNumbers(n))


// Problem 13: Reverse a Number Using Recursion
// Medium
// You've already reversed a number using a while loop. Now solve the same problem using recursion only.
// let num = 12345;

// Expected Output: 54321

// const reverseNum = (num,reverse=0)=>{
//     console.log(num,"num")
//     if(num===0){
//         return reverse;
//     }
   
//     let newNum=num
//     let lastDigit=newNum%10;//5//4
//     newNum = Math.floor(newNum/10)//1234//123
//     reverse = reverse *10+lastDigit
//     return reverseNum(newNum,reverse)
// }
// console.log(reverseNum(num))


// Problem 14: Count Digits Using Recursion
// Easy
// You've already counted digits using a while loop. Now solve the same problem using recursion only.
// let num = 98765;

// // Expected Output: 5

// const countDigits = (nums)=>{
// if(nums===0){
//     return 0;
// }
// let newNum = Math.floor(nums/10)
// return 1+countDigits(newNum)
// }

// console.log(countDigits(num))


// Problem 15: Find GCD Using Recursion
// Difficulty: Easy

// You've already solved GCD using a while loop. Now implement the same Euclidean algorithm using recursion.



// Expected Output: 6

// const findGCD=(a,b)=>{

//     if(b===0){
//         return a;
//     }

//     let remainder=a%b;
//     a=b;
//     b=remainder;

//     return findGCD(a,b)
// }
// let a = 48;
// let b = 18;
// console.log(findGCD(a,b));


// Problem 16: Check Palindrome Using Recursion
// Difficulty: Medium

// A palindrome number reads the same forwards and backwards.

// For example, 12321 is a palindrome.
// Your task
// Write a recursive JavaScript function to check whether a number is a palindrome.


// let num = 12321;

// // Expected Output:
// // Palindrome Number

// let originalNum=num;
// let reverse=0;
// const reverseNum=(num,reverse=0)=>{
//     if(num===0){
//         return reverse;
//     }
//     let lastDigit = num%10;
//     reverse = reverse *10+lastDigit
//     num = Math.floor(num/10);
//     return reverseNum(num,reverse)
// }
// if(originalNum === reverseNum(num)){
//     console.log("Palindrome")
// }else{
//     console.log("Not a palindrome");
// }


// Problem 17: Multiply Two Numbers Using Recursion
// Difficulty: Easy

// Write a JavaScript function to multiply two non-negative integers using recursion, without using the multiplication operator (*).

// For example:
// let a = 5;
// let b = 4;

// // Expected Output: 20


// const MultiplyNum=(a,b)=>{
//     if(b===0){
//         return 0;
//     }
//     return a+MultiplyNum(a,b-1)
// }

// console.log(MultiplyNum(a,b))



// Problem 18: Sum of Squares Using Recursion
// Difficulty: Easy

// Write a recursive JavaScript function to calculate the sum of squares of the first n natural numbers.

// For example:
// \[
// 1^2+2^2+3^2+4^2=30
// \]

// Your task

// let n = 4;

// // Expected Output: 30

// const sumSquareNum=(n)=>{
//     if(n===0){
//         return 0;
//     }
//  return n*n+sumSquareNum(n-1)
// }
// console.log(sumSquareNum(n))

// Problem 19: Check Strong Number
// Difficulty: Medium

// A Strong Number is a number whose sum of the factorials of its individual digits equals the original number.

// For example, 145 is a Strong Number because:
// \[
// 1!+4!+5!=1+24+120=145
// \]

// Your task
// let num = 145;
// let ognum = 145;

// // Expected Output:
// // Strong Number

// const fact=(n)=>{
//     if(n===0){
//         return 1;
//     }
//     return n*(fact(n-1))
// }
// const StrongNumber=(num)=>{
//     if(num===0){
//         return 0;
//     }
// let lastDigit = num%10;
// num = Math.floor(num/10);

// return fact(lastDigit)+StrongNumber(num)
// }


// if(ognum===StrongNumber(num)){
//     console.log("Strong Number")
// }else{
//     console.log("Not a Strong Number")
// }


// Problem 20: Fibonacci Using Memoization
// Difficulty: Hard

// You've already solved Fibonacci using recursion:
let n = 10;

// Expected Output: 55

const memo = {};

const fibonacci = (n) => {
    if (n <= 1) return n;

    // Step 1: Check whether memo[n] already exists.
    if(memo[n]){
        return memo[n]
    }

    // Step 2: If not, calculate fibonacci(n-1)
    //         + fibonacci(n-2).

    let fib=fibonacci(n-1)+fibonacci(n-2)

    // Step 3: Store the result in memo[n].
    memo[n]=fib;

    // Step 4: Return memo[n].
    return memo[n]
};

console.log(fibonacci(10));
