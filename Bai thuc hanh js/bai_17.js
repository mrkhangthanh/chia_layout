// 17)Tính S(x,n) = 1 + (x^2)/2! + (x^4)/4! + ... + (x^2n)/(2n)!

let n = 3;
let x = 1;
let tu_so = 0;
let mau_so = 0;
for (let i = 0; i <= n; i++){
    tu_so += Math.pow(x,2*i);
    mau_so += 2*i;

}
console.log(tu_so / mau_so);