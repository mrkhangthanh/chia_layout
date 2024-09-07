// 16)Tính S(x,n) = x + (x^2)/2! + (x^3)/3! + ... + (x^n)/n! 

let x = 5;
let n = 5;
let giai_thua = 1;
let tu_so = 1;
let ket_qua = 0;
for(let i = 1; i <= n; i++){
     giai_thua *= i;
     tu_so = Math.pow(x, i);
    ket_qua += tu_so / giai_thua;
    
}
console.log("ket qua : " + ket_qua);