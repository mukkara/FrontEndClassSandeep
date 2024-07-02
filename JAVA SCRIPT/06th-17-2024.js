
//Primitive Data Type
// I. String
// II. Number
// III. Boolean
// IV. Null
// V. Undefine
// VI. Symbol [Latest Future in ES6]
// VII. BigInt [Latest Future in ES11]	


let abc = 445;

let abcd1 = "Indias";
let abcd2 = 'Indias';
let abcd3 = `Indias`;

let abcde1 = true;
let abcde2 = false;

let abcedf;

let abcedfg ="";
 abcedfg;

 var abcedfgh = null;
//  abcedfgh;


// {
//     "fname":"Sandeep";
//     "lnsme":"ABC";
//     "PHONEnO": undefined;
// }

let nameA =Symbol('ranga');

let nameB =Symbol('ranga');

console.log("--->My Name A:", nameA)
console.log("--->My Name B:", nameB)
// console.log("My Name:", name)

console.log("--->My Name Compare:", nameA === nameB)

let abcA ="Ranga";
let abcB ="Ranga";
console.log("--->My ABC Compare:", abcA === abcB)

let abcAa =0;
let abcBb =false;
console.log("--->My ABC Compare Boolian:", abcAa === abcBb);

let a123b = BigInt(4364565465465465465465465465465465465465465);

console.log("Type BigIn:", typeof a123b)





// console.log("What it this Type 1:",typeof abc)
// console.log("What it this Type 2:",typeof abcd1)
// console.log("What it this Type 4:",typeof abcd2)
// console.log("What it this Type 5:",typeof abcd3)
// console.log("What it this Type 6:",typeof abcde1)
// console.log("What it this Type 7:",typeof abcde1)
// console.log("What it this Type 8:",typeof abcedf)
// console.log("What it this Type 9:",typeof abcedfg)
console.log("What it this Type 10:",typeof abcedfgh)
