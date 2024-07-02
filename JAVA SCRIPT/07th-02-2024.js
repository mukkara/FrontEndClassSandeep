//Array
let Type1 = new Array("a","b","c")
let Type2 = ["a","b","c"];
console.log("Array Type 1:",Type1)
console.log("Array Type 2:",Type2)
// ---------------------------------------
let array1 = [1,2,3,4,5];
console.log("Push 1:",array1);
array1.push(6); //Adding item to last place in the array
console.log("Push 2:",array1);
array1.pop(); //removing item from the array
console.log("Push 3:",array1);
array1.shift(); // remove first postion of the array
console.log("Push 4:",array1);
array1.unshift(0, 0); //// adding in to array 1st position
console.log("Push 5:",array1);
// ------------------------------------------

let num = ["z","y","x","w","v"] //Position it'll start from 0 index [0-4] //Items 5
console.log(num.length) //to find out the length of the array
let nemL=num.length;
console.log(num[5])
// -------------------------Combined the 2 or more arrays----------------
let abArray =[1,2,3];
let cdArray =[11,22,33];
let efArray =[111,222,333];

let abcdArray1 = abArray.concat(cdArray, efArray); //concat
console.log("Concat Array1:", abcdArray1)

let abcdArray2 = [...abArray, ...cdArray, ...efArray] //spread operator
console.log("Concat Array2:", abcdArray2);

let name1 ="Hello";
let name2 = "Every one!";
let nameOP1 = name1.concat(" ", name2);
console.log("Concat String O/P 1:", nameOP1);

let nameOP3 = name1+" " + name2
console.log("Concat String O/P 3:", nameOP3);

let nameOP2 = [...name1, ...name2]
console.log("Concat String O/P 2:", nameOP2);


// ---------------------------------------------------------------


















