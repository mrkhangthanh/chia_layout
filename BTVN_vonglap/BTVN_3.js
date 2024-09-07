// Cho 1 số nguyên n, in ra số đảo ngược của số nguyên đó
// VD: 1234 => 4321
// Gợi ý: dùng while, chia lấy dư cho 10 để lấy số cuối

let n = 12345;
let sodaonguoc = 0;
console.log(n % 10)
while( n > 0 ) {
    let socuoi = n % 10;
    sodaonguoc = sodaonguoc * 10 + socuoi; // 5 4 3 2 1 0 + 5; 5 +4 ; 9 + 3
    n = n / 10 - socuoi / 10;
}
console.log(sodaonguoc);


