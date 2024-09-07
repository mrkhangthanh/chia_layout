// 22)S(n) = 1/(1 + 1/(1 + 1/(1 + 1/(... 1 /(1/(1 + 1/(1 + 1 )))))))
let n = 5;
let ket_qua = 1; 
    for (let i = 1; i <= n; i++) {
        ket_qua = 1 / (1 + ket_qua); 
    }
    console.log(ket_qua)