// ShallowCopy // DeepCopy

let abcArray1 = ['A','B','C',['D','E']];

let abcArray2=[...abcArray1];
console.log("RSR-1:",abcArray1)
console.log("RSR-2:",abcArray2)

abcArray1[3][0]="RSR";
console.log("RSR-11:",abcArray1)
console.log("RSR-22:",abcArray2)
// ------------------------------------------------------------
let data11 = {name:"Ranga",info:{age:30, place:"india"}};

let data12 = Object.assign({}, data11);


data11.info.place="USA"
console.log("RSR-AA:",data11)
console.log("RSR-BB:",data12)


