// 6)Tính S(n) = 1/(1*2) + 1/(2*3) + 1/( n(*n-1) ) 1/(n*n)*(n+1) = 1/1*2 1/ 2 * 3

let n = 6;
let sn = 0;
for( let i = 1; i <=n; i++){
    sn += 1/ (i*i)*(n+1);
}
console.log(sn);

