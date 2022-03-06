let a = 5;
let b = ++a;

// step 1: + 1 cho a ---> a = a + 1 => a = 6;
// step 2: trả về a sau khi thực thi
// console.log({'a ': a, 'b ': b}); // a = 6, b = 6

let number = 10;
let output = number++;

// step 1: tạo ra 1 biến mới copy value cũ của number
// step 2: + 1 cho number ---> number = number + 1 => number = 11
// step 3: trả về a trước khi thực thi
// console.log({'number': number, 'output': output});// number = 11, output = 10

// ví dụ 1:
let num = 6;
let result = num++ + --num; // 6 + 6
console.log('result: ', result);