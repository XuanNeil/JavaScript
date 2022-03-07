/**
 * Làm việc với Array
 * References:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * - https://www.w3schools.com/jsref/jsref_obj_array.asp
 */

/**
 * 1. toString
 * 2. join
 * 3. pop
 * 4. push
 * 5. shift
 * 6. unShift
 * 7. splice
 * 8. slide
 * 9. concat
 * 10. includes
 * 11. isArray
 */

const list = ['JS', 'HTML', 'Java', 'Python'];

//1. toString(); convert an array to a string of array value (được phân tách bằng dấu phẩy)
// console.log(list.toString());

//2. join(); method also joins all array elements into a string.
// Hoạt động giống như toString() nhưng bạn so thể chỉ địng dấy phân tách
// console.log(list.join(' '));

//3. pop(); method removes the last element from an array and return it.
const listNumber = [];
// console.log(list.pop()); // return it
// console.log(listNumber.pop()); // undefined

//4. push(); method adds a new element to an array (at the end), return length of array
// console.log(list.push('Ruby')); // retun length array

//5. shift(); method removes the first array element. 
// tương tự như pop() method chỉ khác làm làm việc với element đâu tiên trong array
// console.log(list.shift()); // return it

//6. unShift(); method adds a new element to an array (at the beginning), return the new array length
// console.log(list.unshift('C')); // return length array

//7. splice(); method adds new items to an array or remove elements
// list.splice(1, 0, 'C#');
// console.log(list);

// list.splice(2, 2, 'Ruby');
// console.log(list);

// list.splice(0, 1);//remove element 
// console.log(list);

//8. slice(); method slices out a piece of an array into a new array.
// console.log(list.slice(1));
// console.log(list.slice(1, 3));
// console.log(list.slice()); // copy 1 array

//9. concat(); // method creates a new array by merging arrays.
// const languages = ['English', 'Us'];
// console.log(list.concat(languages));

// 10. includes(); method return boolean. if true include element in array, else false element not found.
// phân biệt hoa và thường
// console.log(list.includes('JS'));

//11. isArray(); method return boolean, check array
// console.log(Array.isArray(list));