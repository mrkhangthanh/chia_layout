// 4)Tính S(n) = 1/2 + 1/4 + ... + 1/2n

let n = 3;
let s_n = 0;
for(let i = 1; i <= n; i++){
    s_n = s_n + 1/(2*i);
}
console.log(s_n);