/**
 * Promise
 * 1. promise có 3 trạng thái
 *  - Pending
 *  - Fulfilled
 *  - Reject
 * 2. return resolve or reject
 * 3. - if call resolve -> then()
 *    - if call reject -> catch()
 *    - 2 both -> finally()
 */

let promise = new Promise(function(resolve, reject){
    resolve();
});

// ví dụ 1:
// promise.then(()=>
//     console.log('Successully'))
//     .catch(()=>console.log('Failure'))
//     .finally(()=> console.log('Done'));

// ví dụ 2: promise chain
// promise.then(()=> {
//     return 1;
// }).then((data)=> {
//     console.log(data);
//     return 3;
// }).then((data) => {
//     console.log(data);
//     return 10;
// }).then((data) => console.log(data))
// .catch(()=> console.log('Error'))
// .finally(() => console.log('Done'));

// ví dụ 3: Promise lồng Promise
// promise.then(() =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve('1000');
//         }, 3000)
//     })
// })
// .then((data)=> console.log(data))
// .then(()=> console.log('500'))
// .catch(() => console.log('Error'))
// .finally(()=> console.log('Done'));

// ví dụ 4: dùng Promise tạo function sau 1s
// const sleep = (ms) => {
//     return new Promise((resolve, _) =>{
//         setTimeout(resolve, ms)
//     })
// }
// sleep(1000).then(()=>{
//     console.log(1);
//     return sleep(1000);
// }).then(() => {
//     console.log(2);
//     return sleep(1000);
// }).then(() => {
//     console.log(3);
//     return sleep(1000);
// }).catch(()=> console.log('Error'))
// .finally(() => console.log('Done'));

// ví dụ 5: Promise.resolve() và Promise.reject()
// let listPromise = Promise.resolve('resolve');
// listPromise.then((result)=> console.log(result)); //resolve

// let listPro =  Promise.reject('Error');
// listPro.then((result)=> console.log(result))
// .catch((error)=> console.log(error));//Error

//ví dụ 6: Promise.all([]); // chạy các logic song song nhau
