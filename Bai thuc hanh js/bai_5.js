// 5)Tính S(n) = 1 + 1/3 + 1/5 + ... + 1/(2n+1)
let n = 3;
let sn = 0;
for( let i = 0; i <= n; i++){
    sn = sn + 1/((2*i) + 1);
}
console.log(sn);