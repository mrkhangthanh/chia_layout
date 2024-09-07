// 29)Cho số nguyên dương n . Hãy tìm chữ số đầu tiên của n

let n = 100;
while (n >= 10) {
    n = Math.floor(n / 10); // Chia n cho 10 cho đến khi còn lại chữ số đầu tiên
}
console.log(n);