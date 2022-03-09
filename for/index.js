/**
 * Loop
 */

/**
 * 1. for - Lặp với điều kiện đúng
 * 2. for/in - Lặp qua key của đối tượng
 * 3. for/of - Lặp qua value của đối tượng
 * 4. while - Lặp khi điều kiện đúng
 * 5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 * 6. for/each
 */

//1. for
let list = ['Ha', 'Van', 'Xuan', 'No', 'Name'];
// for (let a = 0; a < list.length; a++){
//     console.log(list[a]);
// }

//2. for/in
// for (let key in list) {
//     console.log(key);
//     console.log(list[key]);
// }

//3. for/of
// for (let i of list) {
//     console.log(i);
// }

//4. for/each
list.forEach((item, index)=> console.log(index));