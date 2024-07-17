//Conditional Statement

// if(){}
// // -----------------
// if(){}
// else{}
// // ----------------
// if(){}
// else if(){}
// else{}
// // ----------------
// if(){}
// else if(){}
// else if(){}
// else{}

let freeLeft =100;

if(freeLeft == "100"){console.log("Now you can Go...!")}
else{console.log("You Need to Stop...!", freeLeft)}

// -------------------------
let abc = "Rohit"
if(abc == "Ranga"){console.log("You are Ranga")}
else if(abc == "Sandeep"){console.log("You are Sandeep")}
else{console.log("-------Not Avaliable--------")}
// -------------------------
let xyz = "blue";
if(xyz == "red"){console.log("You Need To Stop..!")}
else if(xyz == "green"){console.log("You Need To Go...!")}
else if(xyz == "orange"){console.log("Be Ready...!")}
else{console.log("-------Not Avaliable Blue--------")}


// ------------------------------------------------------------------------
// switch(){
//     case value1:
//     case value2:
//     case value3:
//     case value4:
//     default:
// }

let todayDay ="Sunday";

switch(todayDay){
    case "Monday": console.log("Its Monday, Weekday");
    break;
    case "Tuesday": console.log("Its Tuesday, Weekday");
    break;
    case "Wednesday": console.log("Its Wednesday, Weekday");
    break;
    case "Thrusday": console.log("Its Thrusday, Weekday");
    break;
    case "Friday": console.log("Its Friday, Weekday");
    break;
    case "Saturday": 
    case "Sunday": console.log("Its, Weekend");
    break;
    default:
        console.log("Its In_valid Date")
}
