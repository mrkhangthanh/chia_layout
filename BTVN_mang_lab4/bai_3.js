// Nhập vào n số nguyên

// a. Đếm số phần âm, dương, bằng 0 của dãy.
// b. Xác định số âm lớn nhất và số dương nhỏ nhất.
// c. Cho biết | tổng âm| có bằng tổng dương không.

let n = [5, 10, 3,0, -4, -10, -3]
let countphanAm = 0;
let countphanDuong = 0;
let countbang0 = 0;
let soAm = n.filter(num => num < 0);
let soDuong = n.filter(num => num >0);
for(let i = 0; i < n.length; i++){
    if(n[i] < 0 ){
        countphanAm++;
    }
    else if(n[i] > 0 ){
        countphanDuong++;
    } else{
        countbang0++;
    }        
}
console.log("So Phan tu co gia tri Am la : " + countphanAm);
console.log("so Phan tu co gia tri duong la : " + countphanDuong);
console.log("so Phan tu co gia tri bang 0 la : " + countbang0);
// b. Xác định số âm lớn nhất và số dương nhỏ nhất.
// c. Cho biết | tổng âm| có bằng tổng dương không.
let soAmMax = Math.max(...soAm);
console.log("So am lon nhat la : " + soAmMax);
let tongAm = 0;
for(let a = 0; a < soAm.length; a++){
  tongAm += soAm[a];
}
let soDuongMin = Math.min(...soDuong);
console.log("So duong Nho Nhat la : " + soDuongMin);

let tongDuong = 0;
for(let d = 0; d < soDuong.length; d++){
    tongDuong += soDuong[d];
}
if (tongAm + tongDuong === 0){
    console.log(" Tong Am = tong Duong")
}else{
   console.log(" Tong am # Tong duong");
}

