
// 8)Tính S(n) = 1/2 + 3/4 + 5/6 + ... + (2n+1)/(2n+2)

let n = 5;
let sn = 0;
for(let i = 0; i <=n; i++){
    sn += (2*i + 1)/ (2 * i + 2);
}
console.log(sn);
