// 28)Hãy tính tích các chữ số lẻ của số nguyên dương n

let n = 3;
let tich_le = 1;

for( let i =  0; i <= n; i++){
    if(i % 2 !== 0){
        tich_le *= i;

    }
}
console.log(tich_le);