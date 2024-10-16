// Cho n số nguyên
// a. Tìm vị trí và giá trị phần tử lớn nhất của dãy.
// b. Tìm vị trí và giá trị phần tử nhỏ nhất của dãy.
// c. Tính tổng các phần tử của dãy.


// let n = [2, 3, 9];
// let giaTriLonNhat = Math.max(...n);
// let viTriMax = n.indexOf(giaTriLonNhat) + 1 ;
// let giaTriNhoNhat = Math.min(...n);
// let viTriMin = n.indexOf(giaTriNhoNhat) + 1;
// let tongPhanTu = 0;
// console.log("a. Gia tri lon nhat trong day la : " + giaTriLonNhat + " Nam tai vi tri : " + viTriMax);
// console.log("b. Gia tri nho nhat trong day la : " + giaTriNhoNhat + " Nam Tai vi Tri : " + viTriMin);
// for(let i = 0; i < n.length; i++){
//     tongPhanTu += n[i];
// }
// console.log("c. tong phan tu trong day bang : " + tongPhanTu);



// Nhập vào n số nguyên

// a. Đếm số phần âm, dương, bằng 0 của dãy.
// b. Xác định số âm lớn nhất và số dương nhỏ nhất.

// let n = [-5,6,-10,-3,0,5,-2,-5];
// let countAm = 0;
// let countDuong = 0;
// let bang0 = 0;
// let soAmMax = 0;
// let soDuongMin = 0;
// let soAm = n.filter(num => num < 0);
// let soDuong = n.filter(num => num > 0);
// // console.log(soDuong);
// // console.log(soAm);

// for (let i = 0; i < n.length; i++) {
//     soAmMax = Math.max(...soAm);
//     soDuongMin = Math.min(...soDuong);
// }
// console.log(soAmMax);
// console.log(soDuongMin);

let n = [3,5,6,9,2,7];
let c = 2;
let viTri = n.map((num, index) => `Vi tri so - ${index + 1} = ${num}`);
let soChan = n.filter(num => num % 2 === 0);
let vitriso = n.indexOf(c);
console.log(soChan);
console.log(vitriso);
console.log(viTri);