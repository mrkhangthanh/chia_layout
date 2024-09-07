// 19)Tính S(n) = sqrt(2 + sqrt (2 + ... sqrt ( 2 + sqrt(2) ) ) )

let n = 6;
let ket_qua = 0;
for(let i = 1; i <= n; i++){
    ket_qua = Math.sqrt(2 + ket_qua); 
}
    console.log(ket_qua)