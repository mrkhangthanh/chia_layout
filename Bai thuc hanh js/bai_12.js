// 12)Tính S(x,n) = x + x^2 + x^3 + ... + x^n 6 

let n = 3;
let x = 2;
let sn = 0;
for(let i = 1; i <= n; i++){
    sn = sn + Math.pow(2,i);
}
console.log(sn);