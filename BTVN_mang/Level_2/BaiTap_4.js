// Khai báo 1 mảng số nguyên
// Chuyển tất cả các số chẵn có trong mảng thành số lẻ bằng phép toán chia cho 2 (chia cho 2 đến bao giờ trở thành số lẻ, số 0 giữ nguyên)
// Nếu phần tử không là số nguyên tố thì chuyển phần tử đó thành số nguyên tố gần nó nhất( nếu 2 số nguyên tố gần phần tử đó thì ưu tiên số nguyên tố nhỏ hơn nó)(dùng mảng ban đầu)

// 1. Khai báo mảng số nguyên
let arr = [10, 15, 8, 23, 44, 7, 0, 18, 29, 56, 30];

// 2. Chuyển tất cả số chẵn thành số lẻ bằng cách chia cho 2
arr = arr.map(num => {
    if (num === 0) return num; // Giữ nguyên số 0
    while (num % 2 === 0) {
        num = num / 2; // Chia cho 2 đến khi thành số lẻ
    }
    return num;
});
console.log(`Mảng sau khi chuyển các số chẵn thành số lẻ: ${arr}`);

// Hàm kiểm tra số nguyên tố
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Hàm tìm số nguyên tố gần nhất
function nearestPrime(num) {
    if (isPrime(num)) return num; // Nếu đã là số nguyên tố thì trả về chính nó

    let lower = num - 1;
    let upper = num + 1;

    // Tìm số nguyên tố nhỏ hơn gần nhất
    while (lower > 1) {
        if (isPrime(lower)) break;
        lower--;
    }

    // Tìm số nguyên tố lớn hơn gần nhất
    while (true) {
        if (isPrime(upper)) break;
        upper++;
    }

    // Trả về số nguyên tố gần nhất, ưu tiên số nhỏ hơn nếu cả hai cùng khoảng cách
    return num - lower <= upper - num ? lower : upper;
}

// 3. Thay thế các phần tử không là số nguyên tố bằng số nguyên tố gần nhất
arr = arr.map(num => {
    if (!isPrime(num) && num > 1) {
        return nearestPrime(num);
    }
    return num;
});
console.log(`Mảng sau khi thay thế các số không phải nguyên tố: ${arr}`);

