//Slice Array Method
let nameNum = ['a','b','c','d','e','f'];
// ------------ 0   1    2   3   4   5
// Syntax:- array.slice(starting, ending[It will Not Take that Position])

let newNameNum1 =  nameNum.slice(1,1);
let newNameNum2 =  nameNum.slice(1,2);
let newNameNum3 =  nameNum.slice(1,3);
let newNameNum4 =  nameNum.slice(1);
console.log("-------------------------")
console.log("Slice nameNum: 1", nameNum)
console.log("Slice nameNum: 2", newNameNum1)
console.log("Slice nameNum: 3", newNameNum2)
console.log("Slice nameNum: 4", newNameNum3)
console.log("Slice nameNum: 5", newNameNum4)
console.log("Slice nameNum: 6", nameNum)
console.log("-------------------------")
let numNum  = ['aa','bb','cc','dd','ee','ff'];
// ------------  0   1     2    3    4    5
//Syntax :- array.splice(starting, delectItem, Item1, Item2, ......)
// Note:- 
// ->Starting indexe;
// ->delectItem [Optional] How many Item need to remove 
// ->Item1, Item2, Item3...;
let aa = numNum.splice(2,3);
console.log("Array Splice 1:", aa)
console.log("Array Splice 2:", numNum)
let aaa = numNum.splice(2,3, "001","0002");
console.log("Array Splice 3:", aaa);
console.log("Array Splice 4:", numNum)

// ---------------------------------------------------------------
let myArray = ["a1","a5","a2","a3","a4","a5", "a3","a6", "a2","a5", "a2"]; //-1 or outPut
// -----------   0    1    2    3    4    5     6    7     8    9     10
//Syntax:- array.indexOf(element, FromIndx);
console.log("Index 1", myArray.indexOf("a5")) //1
console.log("Index 1-A", myArray.indexOf("a5", 10)) // -1
console.log("MY Array:", myArray)
console.log("Index 2-A", myArray.indexOf("a2", 2))
console.log("Index 3", myArray.lastIndexOf("a2"))
console.log("Index 4", myArray.lastIndexOf("a2", 3))
console.log("Index 4", myArray.lastIndexOf("a2", 2))
// ----------------------------------------------------------------
// forEach & Map
let rsr = [1,2,3,4,5];

let newRSR =  rsr.forEach((item)=>{
    console.log("ForEach+Map:00",item*2)
});
console.log("ForEach+Map:01", rsr)
console.log("ForEach+Map:2", newRSR)

let rsr1 = [1,2,3,4,5];

let newRSR1= rsr1.map((item)=>
    item*2
);
console.log("ForEach+Map:1", rsr1)
console.log("ForEach+Map:2", newRSR1)


