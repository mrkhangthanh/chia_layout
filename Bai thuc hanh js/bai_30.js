// 30)Hãy tìm chữ số đảo ngược của số nguyên dương n

let n = 4535;
let sodaonguoc = 0;
while (n > 0) {
    let socuoi = n % 10; // Lấy chữ số cuối cùng của n
    sodaonguoc = sodaonguoc * 10 + socuoi; // Thêm chữ số cuối vào kết quả đảo ngược
    n = Math.floor(n / 10); // Bỏ chữ số cuối của n
}
console.log(sodaonguoc)
