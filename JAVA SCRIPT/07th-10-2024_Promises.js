// Promises

// let myPromises = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let sucess = false;
//         if(sucess){
//             reject("Its Not Work")
//         }else{
//             resolve("Its Working")
//         }
//     }, 2000)
// })

// myPromises.then(
//     (data)=>{console.log(data)}
// ).catch(
//     (error)=>{console.log(error)}
// )

//Promise All

// let promise1 = Promise.resolve("My First Call");
// let promise2 = Promise.resolve("My Seond Call");
// let promise3 = Promise.reject("My Third Call");
// Promise.all([promise1, promise2, promise3]).
// then(mainData=>console.log(mainData))
// catch((error)=>{console.log("Its Fail:", error)})
// console.log("My O/P:", data)

// Promise.allSettled([promise1, promise2, promise3]).
// then((myData)=>{console.log("Its Pass AllSettle:", myData)}).catch((error)=>{console.log("Its Error:", error)})



let abc1 = new Promise((resolve)=>{
    setTimeout(resolve, 10000,"I'm First")
})

let abc2 = new Promise((reject)=>{
    setTimeout(reject, 200,"I'm Second")
})

let abc3 = new Promise((resolve)=>{
    setTimeout(resolve, 3000, "I'm Third")
})

Promise.race([abc1, abc2, abc3]).then((message)=>console.log(message))



let promiseA = Promise.resolve("My First Call");
let promiseB = Promise.resolve("My Seond Call");
let promiseC = Promise.resolve("My Third Call");

// Promise.any([promiseA, promiseB,promiseC]).then((message)=>{console.log("My Res Message:", message)})
// .catch((error)=>console.log("My Res Message:", error));

Promise.any([promiseA, promiseB, promiseC]).then((x) => {
    myDisplay(x);
  });

Promise.a