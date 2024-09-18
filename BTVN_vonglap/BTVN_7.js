// Cho 1 số nguyên dương n
// Viết chương trình tính kết quả biểu thức S= 1+1/23+1/33+...+1/n3 (làm tròn 3 chữ số thập phân).

// let n = 10;
// let S = 0;
// let ket_qua = 0;
// for( let i = 1; i <= n; i++){
//     S = S + 1 / Math.pow(i, 3);
//    ket_qua = S.toFixed(3);
// }
// ket_qua = S.toFixed(3);
// console.log(ket_qua);

function testM(a, b) {
    if (a < b){
        return a + b;
    }
    
}
let sum = testM(5, 4);
console.log(sum);

function checkH(y, z){
    return y * z;
}

let tich = checkH(5,3);
console.log(tich)
