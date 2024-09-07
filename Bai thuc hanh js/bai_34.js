// 34)Hãy kiểm tra số nguyên dương n có toàn chữ số chẵn hay không ?

let n = 6887;
let doichuoi = n.toString().split('');
let toanchan = "la so toan chan";

for(let i = 0; i < doichuoi.length; i++){
    let sotunhien = parseInt(doichuoi[i]);
    if ( sotunhien % 2 === 0 ){
        toanchan = n + " la so toan chan";
    }else{
        toanchan = n + " khong phai la so toan chan";
    }
}
console.log("so tren toan chan phai khong ? - tra loi : " + toanchan)