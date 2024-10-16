// Bài 3: Tạo 1 mảng có 100 phần tử toàn bộ là số 0, 
// chuyển mảng vừa tạo thành mảng mới có giá trị từ 0->99, 
// lọc ra những số chia hết cho 5 rồi tính tổng những số còn lại

let mangso0 = Array(100).fill(0);
console.log(mangso0);
console.log("=====// Chuyển mảng thành các số từ 0 đến 99 ====");
// Chuyển mảng thành các số từ 0 đến 99
const newArray = mangso0.map((_, index) => index);
console.log(newArray);

console.log("===== lọc ra những số chia hết cho 5 rồi tính tổng những số còn lại ====");
// lọc ra những số chia hết cho 5 rồi tính tổng những số còn lại
 const  chiHetcho5 = newArray.filter(num => num % 5 !== 0);

 console.log(chiHetcho5);
 console.log("===== Tính tổng các số không chia hết cho 5 ====");
const sum = chiHetcho5.reduce((acc, current) => acc + current, 0);
console.log("Tong bang : " + sum);
