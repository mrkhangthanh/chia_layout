// Cho 1 số nguyên n, in ra số đảo ngược của số nguyên đó
// VD: 1234 => 4321
// Gợi ý: dùng while, chia lấy dư cho 10 để lấy số cuối

let n = 12345;
let sodaonguoc = 0;
while( n > 0 ) {
    let socuoi = n % 10;
    sodaonguoc = sodaonguoc * 10 + socuoi; 
    n = n / 10 - socuoi / 10;
}
console.log(sodaonguoc);


