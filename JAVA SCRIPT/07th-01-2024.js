// ----Loops------
// 1.for-Loop
// 2.while Loop
// 3.do-wile loop
// 4.for in loop
// 5.for of loop


// --------------For Loop---------------

// {Initilization; Condition; Increment/Decrement}

// for(Initilization; Condition; Increment/Decrement){
//     code to be run
// }

// print in b/w 0-10
for (let i= 0; i<=10; i++){
    console.log("Checking NUmbers:", i)
}

// -----------------------------------------------------------------------
//while Loop;
let j=0; 
while(j<10){
console.log("Checking NUmbers: J", j);
j++;
}
// --------------------------
let jj=0;
let numJJ=1;
while(jj <10){
    jj+=numJJ; // jj =jj+numJJ
    numJJ++;
    console.log("Sum of num untill 10:-", jj)
}
// ------------------------------------------------------
// do{
//     //conditon need to true for the first time
// }while(condition)

let kk =0;
do{
    console.log("Lets Check kk do-while:",kk);
    kk++;
}while(kk<5);

let kkk = false;
do{
    console.log("kkk---->", kkk)
}while(kkk)
// --------------------------------------
// for-in-loop
// --------------
// for(varible in object){
// //which code nned to be run
// }
const myDetails ={name:"Ranga", age:"30", city:"Hyd"};


// {name:"RSR"};

// let aaa = [10,122,62];
// console.log(aaa[1])

for(yyyyyy in myDetails){
    console.log(yyyyyy +":"+ myDetails[yyyyyy])
}

console.log(10+"AA"+0.12);
console.log(0.12+"aa"-true);


let names=["Ranga", "RSR", "Sandeep"];
for(index in names){
    console.log("A"+index +": "+ names[index])
}
// ---------------------------------------------
//for of loop
// for(variable of iterable){
//     code o/p
// }

// let items= [1,2,3,4,5]
let items= "Sandeep"

for(cell of items){
    console.log("Ecah Cell:", cell)
}
// ------------------
// [1,2,3,4,true,"ABC",{name:"Ranga", age:30}]


