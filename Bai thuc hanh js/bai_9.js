// 9)Tính T(n) = 1*2*3* 4.....*n

let n = 4;
let tn = 1;
for(let i = 1; i <= n; i++) {
    tn = tn * i;
}
console.log(tn)