// 27)Hãy tính tổng các chữ số chẵn của số nguyên dương n

let n = 6;
let tong_chan = 0;

for(let i = 0; i <= n; i++){
    if( i % 2 === 0 ){
        tong_chan += i;
    }
}
console.log(tong_chan);