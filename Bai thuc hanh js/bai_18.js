// 18)Tìm ước số lẻ lớn nhất của số nguyên dương n . Ví dụ : n = 100 ước lẻ lớn nhất của 100 là 25

    let uoc_so = 1; // Bắt đầu với ước lẻ nhỏ nhất là 1
    let n = 9;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && i % 2 !== 0) { // Kiểm tra nếu i là ước của n và là số lẻ
            uoc_so = i; // Cập nhật ước lẻ lớn nhất
        }
    }
    console.log(uoc_so);



