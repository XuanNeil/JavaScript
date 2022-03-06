/**
 * Toán tử: And, or và !
 * 1. And: lấy giá trị cuối cùng của biểu thức so sánh, Nếu có 1 trong 6 giá trị return
 * của boolean = false (false, '', "", 0, NaN, undefined, null) thì sẽ lấy luôn giá trị đó;
 *    Lưu ý: trong biểu thức có nhiều giá trị của boolean = false ở trên thì sẽ lấy giá trị
 *           đầu tiên của biểu thức có 1 trong 6 giá trị của boolean đó (ví dụ c).
 * 
 * 2. Or: ngược lại với And,  lấy giá trị đầu tiên của biểu thức so sánh
 *   và bỏ qua các trường hợp boolean = false như ở trên (ví dụ e)
 *     Lưu ý: nếu tất cả đều là các trường hợp boolean = false thì sẽ lấy giá trị cuối cùng
 *            trong biểu thức.
 * 
 * 3. !: thủ định
 */

let a = 'A' && 'B' && 'C';
// console.log(a); //C

let b = 'A' && 'B' && NaN;
// console.log(b); // NaN

let c = 0 && 'B' && NaN;
// console.log(c); // 0

//2. Or
let d = 'A' || 'B' || 'C' || 'D';
// console.log(d);//A

let e = null || 'B' || 'C' || 'D';
// console.log(e); // B

let f = undefined || 0 || 'C' || 'D';
// console.log(f); // C

let g = undefined || 0 || null || NaN ;
// console.log(g);