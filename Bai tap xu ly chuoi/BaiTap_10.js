// Viết một hàm nhận vào một chuỗi và trả về chuỗi mới sau khi sắp xếp các ký tự theo thứ tự chữ cái. 
// Ví dụ: Nếu chuỗi là "programming", hàm sẽ trả về "aggimmnoprr".

function nhapChuoi(str) {
    return str.split('').sort().join('');
  }
  console.log(nhapChuoi("programming")); 
  console.log(nhapChuoi('bcda'));