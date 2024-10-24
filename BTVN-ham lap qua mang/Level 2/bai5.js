// Tìm phần tử khác nhau giữa 2 mảng
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [2, 3, 6];
// gợi ý: !arr1.includes(curr) => pre.push(curr)


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];

const timPhanTu1 = arr1.filter(num => !arr2.includes(num));
const timPhanTu2 = arr2.filter(num => !arr1.includes(num));
const ketQua = [...timPhanTu1, ...timPhanTu2];
console.log(ketQua);
