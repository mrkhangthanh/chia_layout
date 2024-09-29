// Khai báo 1 mảng số thực
// Tính tổng trung bình cộng phần tử có phần nguyên chẵn trong mảng, nếu không có phần tử có phần nguyên chẵn thì in ra -1.
// Sắp xếp mảng tăng dần và in ra màn hình
// Chuyển tất cả các phần tử có phần nguyên lẻ thành số 1.23 và in ra màn hình

// 1. Khai báo mảng số thực
let arr = [2.56, 3.14, 4.78, 7.21, 8.99, 5.55, 6.01];

// 2. Tính tổng trung bình cộng phần tử có phần nguyên chẵn
let phanNguyenChan = arr.filter(num => Math.floor(num) % 2 === 0); // Lọc các phần tử có phần nguyên chẵn
let tongTrungBinhCong = 0;

if (phanNguyenChan.length > 0) {
    tongTrungBinhCong = phanNguyenChan.reduce((a, b) => a + b, 0) / phanNguyenChan.length;
    console.log(`Trung bình cộng các phần tử có phần nguyên chẵn: ${tongTrungBinhCong}`);
} else {
    console.log(-1); // Không có phần tử nào có phần nguyên chẵn
}

// 3. Sắp xếp mảng tăng dần và in ra
let sapXepTangDan = [...arr].sort((a, b) => a - b); // Sử dụng spread operator để không thay đổi mảng ban đầu
console.log(`Mảng sau khi sắp xếp tăng dần: ${sapXepTangDan}`);

// 4. Chuyển tất cả các phần tử có phần nguyên lẻ thành số 1.23
let mangMoi = arr.map(num => {
    if (Math.floor(num) % 2 !== 0) {
        return 1.23; // Nếu phần nguyên lẻ, thay thế bằng 1.23
    }
    return num; // Giữ nguyên nếu phần nguyên không lẻ
});
console.log(`Mảng sau khi chuyển phần nguyên lẻ thành 1.23: ${mangMoi}`);
