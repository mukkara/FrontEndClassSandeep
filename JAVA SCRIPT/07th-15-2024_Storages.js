//Storages
// 1.LocalStorage;
// 2.SessionStorage

// Note:- We Can Check this storage's in application tab under developer Tool[Ctrl+Shift+I] in Chrome

// -----------------------------------Value's Storing---------------------------------------------

localStorage.setItem('name','Ranga'); //storingin in Local

const abcLoacl = localStorage.getItem('name'); //getting storage from Local

console.log("My Name: from Loacal", abcLoacl);

// -------------------------------------------------------------------------------------
sessionStorage.setItem('name','Ranga'); //storingin in sessionStorage

const abcSession = sessionStorage.getItem('name'); //getting storage from sessionStorage

console.log("My Name: from Session", abcSession);

// ---------------------------------------Object Storing---------------------------------
//Object Storing In Loacl/session
const myData = {
    name:"Ranga",
    age:30,
    profision:"IT",
    role:"Front End Developer"
}

localStorage.setItem('Data', JSON.stringify(myData));

var ursData = JSON.parse(localStorage.getItem('Data'));

console.log("My ursData: from localStorage", ursData);




