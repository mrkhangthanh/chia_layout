// 20)Tính S(n) = sqrt(n + sqrt (n-1 + sqrt(n-2 + ...sqrt(2 + sqrt (1) ) ) ) )

let n = 2;
let ket_qua = 0;
for(let i = 0; i <= n; i++){
    ket_qua = Math.sqrt(n) + Math.sqrt(ket_qua - i);
}
console.log(ket_qua);