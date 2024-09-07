// 15)Tính S(n) = 1 + 1/(1+2) + 1/(1+2+3) + ... + 1/(1+2+3+...+n)

let n = 3;
let tong = 0;
let sn = 0;
for(let i = 1; i <= n; i++){
    tong += i; 
    sn += 1/(tong);

}
console.log(sn);