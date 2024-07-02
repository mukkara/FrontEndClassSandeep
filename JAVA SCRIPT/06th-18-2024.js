
// Non Primitive Data Type
// I. Object
// II. Array
// III. Function
// IV. Date

let xData ={
    name:"Rohit",
    age: 37,
    country:'india',
    status:true,
    phoneNo: 913-3443424,
}

// let aa =  913.0203443424;
console.log("aa 1:", typeof xData)
// ---------------------------------------------------------
let abcArray =['rohit', 'gill', 'sachin','Dhoni', 'Dravid' ];

console.log("aa 2:", typeof abcArray);
// -------------------------------------------------------
function abcFun(fname){
    return `I'm ${fname}`
}
console.log("It's My Name:", abcFun("Sandeep"))
console.log("It's My Name TypeOf:", typeof abcFun)

// ----> String, Number,BigInt, Boolian, Object, Function, undefined, symbol
// -----------------------------------------------------------
let todayDate = new Date();
console.log("WhatsToday Date:", todayDate)
console.log("WhatsToday Date:", typeof todayDate)



