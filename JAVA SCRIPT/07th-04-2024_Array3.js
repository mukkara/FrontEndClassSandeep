//Filter
// Synatax=> Array.filter()
let number = [1,2,3,4,5,6,7,8,9,10];
let onlyEven = number.filter(item=>item % 2 === 0);
console.log("Only Even Numbers 1:",onlyEven)
console.log("Only Even Numbers 2:",number);

//Reduce
//syntax=> Array.reduce()
//accumulator; currentValue;array
let suming =[1,2,3,4];
let sumOP= suming.reduce((acc, currentValue)=>acc+currentValue, 0);
console.log("sumOP:", sumOP);

//find
//syntax=> Array.find()
let opAA= [1,2,3,4,5]
let opBB = opAA.find(item=>item >6)
console.log("opBB:", opBB);

let aabb= ['a',1,'c'];

// console.log("aabb:", aabb['b'])

let ccdd= aabb.find(item => item === '1' );
console.log("ccdd:",ccdd );

//Reverse
//Syntax => arry.reverse();
let aaRev = [1,2,3,4,5];
let nnRev = aaRev.reverse();
console.log("Reverse:", nnRev);

let aaRev1 = ["Ranga", "Sandeep","RSR", "MRSR"];
let nnRev1 = aaRev1.reverse();
console.log("Reverse1:", nnRev1);

//sort
//syntax

let aaSort = ['a','e','b', 'c','d'];
let aabv="fhgfhg"
console.log("Sorting:", aaSort.sort());


//ToCheck its Array or not =>True; false
console.log("Sorting:", Array.isArray(aabv));

let nameRSR =['Ranga', 'Swamy', 'Reddy']
let fullName = nameRSR.join("_")
console.log("fullName: 1", fullName)
console.log("fullName type:", typeof(fullName))

let fullName1 = nameRSR.toString();
console.log("fullName: 2", fullName1)





