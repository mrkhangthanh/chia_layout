// Cho số nguyên dương n bất kỳ, viết chương trình in n phần tử đầu tiên của dãy Fibonacci.
// dãy Fibonacci là dãy số được bắt đầu bằng 2 số 0 và 1 (hoặc 1 và 1), số tiếp theo bằng tổng 2 số trước đó.

let n = 5;
let a = 1;
let b = 1;

console.log(a);
console.log(b);
for(let i = 0; i < n - 2; i++){
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
    
}