// 2. Viết một hàm nhận vào nhiều tham số và trả về tổng của tất cả các tham số. 
// Sử dụng rest parameter để cho phép hàm nhận vào số lượng tham số không xác định trước.

function tinhTong(...cacSo) {
    return cacSo.reduce((pre, curr) => pre + curr, 0);
  }
  // Ví dụ sử dụng
  console.log(tinhTong(1, 2, 3));         
  console.log(tinhTong(10, 20, 30, 40));  
  console.log(tinhTong(5));               
  console.log(tinhTong());               
  


