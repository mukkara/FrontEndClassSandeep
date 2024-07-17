//Function's

function adding(x,y,){
    return x+y
};



// console.log("Addiing of two Numbers: 1", adding(10,20));
// console.log("Addiing of two Numbers: 2", adding(12,10));


// ---------------------------------------------------------------
//Arrow Function
// ()=>{}

// const summing0 = (a,b)=>(return a+b);
const summing1 = (a,b)=>{return a+b};
const summing2 = (a,b)=> a+b;
const summing3 = (a,b)=>(a+b);
const summing4 = (a,b)=>{a+b};
const summing5 = (a,b)=>{
    let c = a*2;
    let d = b*2;
    return c+d
};


    // console.log("Addiing of two Numbers: 1A", summing1(10,20));
    // console.log("Addiing of two Numbers: 2A", summing2(10,20));
    // console.log("Addiing of two Numbers: 3A", summing3(10,20));
    // console.log("Addiing of two Numbers: 4A", summing4(10,20));
    // console.log("Addiing of two Numbers: 5A", summing5(10,20));
    // ----------------------------------------------------------------------------
    //Anonymous Function
    // function(aa,bb){return aa+bb}
    const aabbSum = function(aa,bb){return aa+bb};
    // function aabbSum(aa,bb){return aa+bb};
    console.log("Anon:",aabbSum(1,2));
       // ----------------------------------------------------------------------------
    //IIFE[Immediate Invoked Function] Function
    // (login code ....)()

    // const aa1 = function(){console.log("name 1")};

    (function(){console.log("name 1")})();

    (function nameIt(){console.log("name 2")})();
    (()=>{console.log("name 3")})();
// ------------------------------------------------------------------------------------------
//Call Back Function

// function addSum (asmd){
//     // setTimeout(()=>{
//     // }, 100)
//     asmd("Iam Adding It 1")
// };


// console.log("Call Back Function:", addSum((item)=>{console.log(item)}))

function myName(name, nameAbc){
    console.log("Hello "+name);
    nameAbc();

}

function callingMyName(){
 console.log("I am Ranga")   
}

myName("Mukkara", callingMyName);

// ------------------------------------HOF----------------


// ------------------------------------Nested Function [Closure]------
function nameOutside(){
    function nameInner(){
        console.log("I am Ranga Nested Function")
    };
    nameInner();
}

nameOutside()
// nameInner()
// -------------------------------------------------

function GM(){
    console.log("Hi Sandeep, Good Morning!");
}

function GN(){
    console.log("Hi Sandeep, Good Night!");
}

function wish(hgfhgf){
    console.log("----------------------------")
    console.log("Your Day Started...!");
    hgfhgf();
    console.log("Your Day End...!");

}
function wish1(){
    console.log("----------------------------")
    console.log("Your Day Started...!");
    // myCallBack();
    GN()
    console.log("Your Day End...!");

}

wish(GM)
// wish1()
wish(GN)

// ---------------------------------Closure-----------------------------

function outerFunction(){
    let mainVariable = "Hellow every ...!";
    function innerFunction(){
        console.log(mainVariable);
    }
    return innerFunction;
}

const myOutput =  outerFunction();

myOutput()

 