// Cho n số nguyên
// a. Tìm vị trí và giá trị phần tử lớn nhất của dãy.
// b. Tìm vị trí và giá trị phần tử nhỏ nhất của dãy.
// c. Tính tổng các phần tử của dãy.


let n = [2, 3, 9];
let giaTriLonNhat = Math.max(...n);
let viTriMax = n.indexOf(giaTriLonNhat) + 1 ;
let giaTriNhoNhat = Math.min(...n);
let viTriMin = n.indexOf(giaTriNhoNhat) + 1;
let tongPhanTu = 0;
console.log("a. Gia tri lon nhat trong day la : " + giaTriLonNhat + " Nam tai vi tri : " + viTriMax);
console.log("b. Gia tri nho nhat trong day la : " + giaTriNhoNhat + " Nam Tai vi Tri : " + viTriMin);
for(let i = 0; i < n.length; i++){
    tongPhanTu += n[i];
}
console.log("c. tong phan tu trong day bang : " + tongPhanTu);
