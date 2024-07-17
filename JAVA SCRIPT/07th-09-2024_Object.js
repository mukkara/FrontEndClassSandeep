//Object

const employe = {
    name:"Ranga",
    age:30,
    "sub_occupation":"IT",
    todayActivity:function(){
        console.log("I'm going to Movie")
    },
}
console.log("Obj:-1", employe);

let objKeys = Object.keys(employe);
console.log("Obj:-2 Keys", objKeys);

let objValues = Object.values(employe);
console.log("Obj:-3 Values", objValues);

console.log("Your Name Is:- 1", employe.name)
console.log("Your Name Is:- 2", employe['name'])

// console.log("Your Name Is:- 11", employe.sub_occupation)
// console.log("Your Name Is:- 22", employe['sub_occupation'])
//To call methods in an object
employe.todayActivity();


for(const [key,value] of Object.entries(employe)){
    console.log(`${key}:${value}`);
}

//Update Object [Property]
// ---> Payload(Req):-   "1"

//(Res):- {name:"Sudha", age:"35", gender:"Female"}
const res1={name:"Sudha", age:"35", gender:"Female"}
// ["1a","2b","3c","4d","5e","6f"];
console.log("Before Update Object:-",res1)

res1.name = "Sudha Rock"

console.log("After Update Object:-",res1)


//Deleting object property
const res2={name:"Rubee", age:"35", gender:"Female"}

console.log("Before delete Object 1:-",res2)

delete res2.age;

console.log("After delete Object 2:-",res2)


//Freeze object
const res3={name:"Rolex", age:"35", gender:"Male"};

res3.items="Mango";

console.log("My Object res3 Before Freez:", res3);

Object.freeze(res3);

res3.location="NYC";

console.log("My Object res3 After Freez:", res3);

// ------------------------------------------------------------
let myName1= 'Ranga';
let myName2= "Rohit";
let myName3= `Rohit`;

console.log("String 1:", typeof myName1)
console.log("String 2:", typeof myName2)
console.log("String 3:", typeof myName3)

console.log(`My Name is ${myName2}, I' leaving in NYC `)
console.log("My Name is " + myName3+" I' leaving in NYC ")

console.log("Length of Name 1:", myName1.length)
console.log("Length of Name 2:", myName1.toUpperCase())
console.log("Length of Name 3:", myName1.toLowerCase())
console.log("Length of Name 4:", myName1[4])
// console.log("Length of Name 5:", myName1.slice())
console.log("Length of Name 5:", [...myName1])






