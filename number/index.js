/**
 * Làm việc với Number
 * References:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 * - https://www.w3schools.com/js/js_number_methods.asp
 */

/**
 * 1. toString(): method return a number as a string
 * 2. toFixed(): làm tròn số. nếu dưới 0.5 làm tròn về 0, >=0.5 làm tròn lên 1. Hoàn hảo để làm việc với money (x.tòFixed(2));
 * 3. converting variables to Numbers:
 *  3.1. Number(); Nếu cannot be converted -> return NaN(Not a Number).
 *  3.2. parseInt()
 *  3.3. parseFloat()
 */

let x = 25;
// ví dụ 1:
// console.log(x.toString());
// console.log(typeof x);
// console.log(typeof x.toString());

let number = 10.456
// ví dụ 2:
// console.log(number.toFixed());// number.toFixed(0) //10
// console.log(number.toFixed(1)); // 10.5
// console.log(number.toFixed(2)); // 10.46
// console.log(number.toFixed(5)); // 10. 45600

// ví dụ 3.1:
// console.log(Number(true)); // 1
// console.log(Number('10')); // 10
// console.log(Number('100.55')); // 100.55
// console.log(Number('1000,55')); // NaN
// console.log(Number('100 100')); // NaN
// console.log(Number('100year')); // NaN
// console.log(Number('year')); // NaN

// ví dụ 3.2:
// console.log(parseInt('-10')); // -10
// console.log(parseInt('-10.33')); // -10
// console.log(parseInt('10 6')); // 10
// console.log(parseInt('10 years')); // 10
// console.log(parseInt('year 10'));// NaN

// ví dự 3.3:
// console.log(parseFloat('10'));//10
// console.log(parseFloat('10.33'));// 10.33
// console.log(parseFloat('10 6')); // 10
// console.log(parseFloat('100 years')); // 100
// console.log(parseFloat('years 100')); // NaN
