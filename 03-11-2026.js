let a = 10;
let b = 20;

a = a+b;
b =a-b;
a=a-b;


// console.log(a); // 20
// console.log(b); // 10




function isArray(value) {
  if(value.constructor === Array) {
    return true;
  }
  return false;
}

console.log(isArray([1, 2, 3])); // true
console.log(isArray({ a: 1 }));  // false
console.log(isArray("hello"));   // false