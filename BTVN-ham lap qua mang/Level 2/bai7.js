// Đếm số lần xuất hiện các phần tử trong mảng
// const arrCount = [1, 2, 3, 4, 5, 2, 3, 4, 2, 2, 7, 8, 8];


const arrCount = [1, 2, 3, 4, 5, 2, 3, 4, 2, 2, 7, 8, 8];

const countOccurrences = arrCount.reduce((acc, curr) => {
  // Kiểm tra xem curr đã có trong acc chưa, nếu có thì tăng lên 1, nếu chưa thì khởi tạo là 1
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(countOccurrences);
