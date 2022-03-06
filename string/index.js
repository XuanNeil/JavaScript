/**
 * Làm việc với chuỗi
 * Refferences:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * - https://www.w3schools.com/js/js_string_methods.asp
 * - https://www.w3schools.com/js/js_string_search.asp
 * - https://www.w3schools.com/js/js_string_templates.asp
 */

/**
 * 1. Length:
 * 2. find index
 * 3. Cut string
 * 4. Replace
 * 5. convert to upper case
 * 6. convert to lower case
 * 7. Trim
 * 8. Split
 * 9. Get a character by index
 * 10. includes
 * 11. startWith
 * 12. endWith
 * 13. subString
 * 14. normalize
 */

let fullName = 'I am No Name No';
//ví dụ 1: Length
// console.log(fullName.length);//12

//ví dụ 2: Find index
// console.log(fullName.indexOf('N'));//5
// console.log(fullName.indexOf('N', 6));//8
// console.log(fullName.lastIndexOf('m')); //10
//search

//ví dụ 3: Cut string
// console.log(fullName.slice(5));
// console.log(fullName.slice(0,4));
// console.log(fullName.slice(-7));
// Lưu ý: nếu index parameter k có sẽ return '';

//ví dụ 4: Replace
// console.log(fullName.replace('No', 'Ha Xuan'));
// console.log(fullName.replace(/No/g, 'Xuan')); // sử dụng regular expression

//ví dụ 5: convert to upper case
// console.log(fullName.toUpperCase());// viết hoa tất cả

//ví dụ 6: convert to lower case
// console.log(fullName.toLowerCase()); // viết thường tất cả

//ví dụ 7: Trim
// console.log(fullName.trim()); // cắt các khoẳng trắng

//ví dụ 8: Split
// console.log(fullName.split(' '));

// ví dụ 9: Get a character by index
// console.log(fullName.charAt(0)); // I
// console.log(fullName.charAt(100)); // return chuỗi rỗng ('')
// C2: console.log(fullName[0]);

// ví dụ 10: includes
const browserType = 'mozilla';

// if (browserType.includes('zilla')) {
//   console.log('Found zilla!');
// } else {
//   console.log('No zilla here!');
// }

// ví dụ 11: startsWith
// if (browserType.startsWith('zilla')) {
//   console.log('Found zilla!');
// } else {
//   console.log('No zilla here!');
// }

// ví dụ 12: endsWith
// if (browserType.endsWith('zilla')) {
//     console.log('Found zilla!');
//   } else {
//     console.log('No zilla here!');
//   }

// ví dụ 13: substring
// console.log(fullName.substring(0, 4));