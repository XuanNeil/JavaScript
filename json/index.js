/**
 * 1. JSON là 1 định dạng dữ liệu (chuỗi).
 * 2. Javascript Object Notation
 * 3. JSON: Number, String, Boolean, Null, Array, Object
 * Lưu ý: bắt buộc phải là dấu ""
 */

let listInfo = '["Javascript","ReactJs"]';
console.log(typeof listInfo); // string

let list = '{"name": "No Name","age": 18}';
let parseList = JSON.parse(list);
console.log(typeof list);//string
console.log(parseList); // {name: 'No Name', age: 18}
console.log(typeof parseList);//object