// 7)Tính S(n) = 1/2 + 2/3 + 3/4 + ... + n/(n+1)


let n = 5;
let sn = 0;
for(let i = 1; i <=n; i++){
    sn += n / (n + 1);
}
console.log(sn);

