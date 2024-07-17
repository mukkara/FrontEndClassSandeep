//Operators
//1.Aritmetic Ope
let a = 10;
let b = 20;

let c = a+b;
console.log("Add:-", c);

let aa = 10;
let bb = 20;

let cc = aa-bb;
console.log("Sub:-", cc);

let aaa = 10;
let bbb = 20;

let ccc = aaa*bbb;
console.log("Mul:-", ccc);


let aaaa = 10;
let bbbb = 3;

let ccc1 = aaaa/bbbb;
let ccc2 = aaaa%bbbb;
console.log("Div /:-", ccc1);
console.log("Div %:-", ccc2);


let a1 = 10;
let a2 = "Hi"

console.log("What ?? 1.0:", a1+a2)
console.log("What ?? 1.1:", a2+a1)
console.log("What ?? 2:", a1-a2)
console.log("What ?? 3:", a1*a2)



// 2)10(5
//   10
//   -
//   0

//   3)10(3
//     09
//     -
//     1
// --------------------------------------------------------------
//Asignment Operator
// +;-;*;/;%
let m = 100;
let n = m-100;
// ----
// m-=100

m= m-100

console.log("N:-",n)
console.log("N:-",m)
// ------------------------------------------------------------------
//Comarison Operator

let name1 = "Rohit";
let name2 = "Rohit";
console.log("Check Name 1:", name1 == name2)
let name3 = (name1 == name2)
console.log("Check Name 2:", name1 === name2)
console.log("Check Name 3:", name3)

let name1A = true;
let name2B = "true";
console.log("Check Name 1AB:", name1A == name2B)
console.log("Check Name 2AB:", name1A === name2B)

let name1AA = 0;
let name2BB = "0";
console.log("Check Name 1:", name1AA == name2BB)
console.log("Check Name 2:", name1AA === name2BB)

let name11AA = 0;
let name22BB = false;
console.log("Check Name 1:", name11AA == name22BB)
console.log("Check Name 2:", name11AA === name22BB);


let namePresentOrNot = true;

console.log("namePresentOrNot ->:1", namePresentOrNot)
console.log("namePresentOrNot ->:2", !namePresentOrNot)

let namePresentOrNot1 = 0;
let namePresentOrNot2 = "0";
console.log("namePresentOrNot ->:11", namePresentOrNot1 == namePresentOrNot2)
console.log("namePresentOrNot ->:12", namePresentOrNot1 != namePresentOrNot2)
console.log("namePresentOrNot ->:13", namePresentOrNot1 === namePresentOrNot2)
console.log("namePresentOrNot ->:14", namePresentOrNot1 !== namePresentOrNot2)


let aa11BB= 11;
let aa22BB= 11;
console.log("Less than:", aa11BB <= aa22BB)
// ----------------------------------------------------------------------------

// Ternary
//"If you are Sandeep"? "Yes" :"No" 

let evenNo = 100;

let result = (evenNo > 99)? ((evenNo/2)=="50" ?"Yes": "No"):"Lesser";

console.log("Check It Now 1:-",result )
// ---------------------------------------------------------------------
// Logical Operator Logical And(&&); Logic OR(||); Logical Not(!);
let nameX = true; //1
let nameY =false; //0
let nameZ =true; //1

let nameXY = !(nameX || nameY) //0+1

console.log("Logic End Point:", nameXY)//0
//Chek it From my end What if String is passing-----?

let AbcX= "I'm";
let AbcY ="Sandeep";
let OutPutName = AbcX+" "+AbcY;

console.log("OutPutName:1", OutPutName)

// ------------------------------------------------------------------------
// Bitwise Opertor &; |; ~; >>; <<;
let abXX1= 5; // 0101
let abXX2= 2; // 0010
// ---------------------
            //& 0000
            //| 0111
let opXX1 = (abXX1 & abXX2)
let opXX2 = (abXX1 | abXX2)
console.log("OP_XX: 1", opXX1)
console.log("OP_XX: 2", opXX2)









