// Level 1:
// Khai báo mảng chứa các số nguyên
// in ra màn hình giá trị lớn nhất, nhỏ nhất của mảng.
// In ra màn hình tổng, tích và giá trị trung bình của mảng đó.
// Đếm số 3 xuất hiện bao nhiêu lần trong mảng.
// Đếm trong mảng có bao nhiêu số nguyên tố.
// Xóa phần tử tại vị trí 3.
// Xóa hết các số có giá trị là 2.
// Kiểm tra trong mảng, nếu có số 6 thì chèn số 8 vào sau nó.
// Sắp xếp mảng tăng dần


// in ra màn hình giá trị lớn nhất, nhỏ nhất của mảng.
let a = [3, 5, 4, 6, 2, 8];
let max = Math.max(...a);
let min = Math.min(...a)
console.log("Gia tri lon nhat trong mang la : " + max);
console.log("Gia tri nho nhat trong mang la : " + min);

// In ra màn hình tổng, tích và giá trị trung bình của mảng đó.

let tong = 0;
let tich = 1;
let giaTriTb = 0;
let dem_3 = 0;
for (let i = 0; i < a.length; i++) {
    tong = tong + a[i];
    tich = tich * a[i];
    giaTriTb = tong / a.length;
    if (a[i] === 3){
        dem_3++;
    }
}
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}
let Snt = 0;
for (let i = 0; i < a.length; i++) {
    if (isPrime(a[i])) {
        Snt++;
    }
}
function chenSo(a){
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 6) {
            a.splice(i + 1, 0, 8); 
            i++; 
    }    
}
}

console.log(" tong ca gia tri trong mang la : " + tong);
console.log(" tich bang : " + tich);
console.log(" trung binh gia tri trong mang = " + giaTriTb);

// Đếm số 3 xuất hiện bao nhiêu lần trong mảng.

console.log(" So 3 co " + dem_3 + " so trong mang ");

// Đếm trong mảng có bao nhiêu số nguyên tố.

console.log("Số lượng số nguyên tố trong mảng là:", Snt);

// Xóa phần tử tại vị trí 3. 

a.splice(3, 1);
console.log("Mảng sau khi xóa phần tử tại vị trí 3:", a);

// Xóa hết các số có giá trị là 2.

a = a.filter(num => num !== 2);
console.log("Mang sau khi xoa cacs so co gia tri la 2 : ",  a);

// Kiểm tra trong mảng, nếu có số 6 thì chèn số 8 vào sau nó.

console.log(chenSo(a));
// sap xep mang tang dan 
let s = a.sort((a, b) => a - b);
console.log(s)
