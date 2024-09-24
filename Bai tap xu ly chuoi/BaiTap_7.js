// Kiểm tra chuỗi đối xứng
// Viết một hàm nhận vào một chuỗi và kiểm tra xem chuỗi đó có phải là chuỗi đối xứng hay không.
//  Ví dụ: Nếu chuỗi là "madam", hàm sẽ trả về true.


function strDoiXung(str) {
    // Loại bỏ khoảng trắng và chuyển chuỗi về dạng chữ thường để tránh phân biệt chữ hoa và chữ thường
    str = str.replace(/\s+/g, '').toLowerCase();
    // Đảo ngược chuỗi
    let reversedStr = str.split('').reverse().join('');
    // So sánh chuỗi gốc với chuỗi đảo ngược
    return str === reversedStr;
  }
  // Ví dụ sử dụng
  console.log(strDoiXung("madam  "));     // true
 
  