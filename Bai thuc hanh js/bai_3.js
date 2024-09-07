// 3)Tính S(n) = 1 + 1/2 + 1/3 + ... + 1/n

let n = 10;
let S_N = 0;
for( let i = 1; i <= n; i++){
    S_N = S_N + 1/i;
}
console.log(S_N); 