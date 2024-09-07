// 11)Tính S(n) = 1 + 1.2 + 1.2.3 +  1.2.3.4 +

let n = 4;
let sn = 1;
let tong = 0;
let i = 1;
for(let i = 1; i <= n; i++) {
    sn = sn * i;
    tong += sn;
}
console.log(tong);