//Count a number
// let arr=45678
// let count=0;


// while(arr>0){
//     arr=Math.floor(arr/10);
//     count++;
// }

// console.log(count);


//Reverse a number
// let num=1234;
// let reverse=0;

// while(num>0){
//     lastDigit=num%10;
//     reverse=reverse*10+lastDigit;
//     num=Math.floor(num/10);
// }

// console.log(reverse)

//Palindrome
// let num=121;
// let original=num;
// let reverse=0;

// while(num>0){
//     lastDigit = num%10;
//     reverse = reverse*10+lastDigit;
//     num=Math.floor(num/10);
// }

// if(original===reverse){
//     console.log("Palindrome");
// }else{
//     console.log("Not a Palindrome");
// }

//GCD of two numbers
// let a=12;
// let b=18;

// while(b!== 0){
//     let remainder= a%b;
//      a=b;
//      b=remainder;
// }
// console.log("GCD is: "+a);

// LCM of two numbers
// let a=12;
// let b=18;

// let x=a;
// let y=b;

// while(b!==0){
//     let remainder=a%b;
//     a=b;
//     b=remainder;
// }
// let lcm=(x*y)/a;
// console.log("LCM is: "+lcm);

// Factorial of a number

// let num=5;

// const fact=(num)=>{
// while(num===1){
//     return 1;
// }
// return num*fact(num-1);
// }


// console.log("Factorial is: "+fact(num));


//1 to n print numbers

// let n=10;

// function printnumbers(n){
//     if(n===0){
//         return;
//     }
//     printnumbers(n-1);
//     console.log(n);
// }
// printnumbers(n);


// function sumDigits(num){
//     if(num===0){
//         return 0;
//     }
//     return num%10 + sumDigits(Math.floor(num/10));
// }
// console.log(sumDigits(1234)); // Output: 10

//Power of a number

// function power(a,b){
//     if(b===0){
//         return 1;
//     }
//     return a*power(a,b-1);
// }

// console.log(power(2,3))
