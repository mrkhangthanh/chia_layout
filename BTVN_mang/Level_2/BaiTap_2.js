// Khai báo 1 mảng số nguyên.
// Khai báo 1 biến x có giá trị là số nguyên tùy ý, Đếm số phần tử có giá trị nhỏ hơn x trong mảng
// Tính trung bình cộng các số chia hết cho 3 mà không chia hết cho 5 trong mảng
// Kiểm tra trật tự mảng. Nếu mảng đã được sắp xếp tăng dần hoặc giảm dần thì in ra màn hình YES, ngược lại in ra NO


// 1. Khai báo mảng số nguyên
let arr = [10, 7, 15, 21, 30, 9, 6, 4];

// 2. Khai báo biến x
let x = 10;

// Đếm số phần tử có giá trị nhỏ hơn x
let countLessThanX = arr.filter(num => num < x).length;
console.log(`Số phần tử nhỏ hơn ${x}: ${countLessThanX}`);

// 3. Tính trung bình cộng các số chia hết cho 3 mà không chia hết cho 5
let chiaHet3KhongChiaHet5 = arr.filter(num => num % 3 === 0 && num % 5 !== 0);
let trungBinhCong = 0;

if (chiaHet3KhongChiaHet5.length > 0) {
    trungBinhCong = chiaHet3KhongChiaHet5.reduce((a, b) => a + b, 0) / chiaHet3KhongChiaHet5.length;
    console.log(`Trung bình cộng các số chia hết cho 3 mà không chia hết cho 5: ${trungBinhCong}`);
} else {
    console.log("Không có số nào chia hết cho 3 mà không chia hết cho 5");
}

// 4. Kiểm tra trật tự mảng (tăng dần hoặc giảm dần)
function kiemTraMang(arr) {
    let tangDan = true;
    let giamDan = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) tangDan = false;
        if (arr[i] > arr[i - 1]) giamDan = false;
    }

    if (tangDan || giamDan) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

// Gọi hàm kiểm tra trật tự mảng
kiemTraMang(arr);
