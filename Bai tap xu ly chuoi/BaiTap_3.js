// Viết một hàm nhận vào một chuỗi chứa tên và chuẩn hóa nó theo định dạng "Họ Và Tên". Ví dụ: Nếu nhập vào "ngUYỄN VăN a", 
// hàm sẽ trả về "Nguyễn Văn A".

function chuanHoaTen(str) {
    // Bước 1: Chuyển chuỗi thành mảng các từ
    const words = str.toLowerCase().split(' ');
  
    // Bước 2: Viết hoa chữ cái đầu và ghép lại
    const VietHoaChuDau = words.map(function cacTu(word) {
      if (word) {  // Kiểm tra từ không rỗng
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;  // Trả về từ rỗng nếu có
    });
  
    // Bước 3: Ghép các từ lại thành chuỗi
    return VietHoaChuDau.join(' ');
  }
  
  // Ví dụ
  const ten = "Nguyen van THAnh LOnG";
  const tenChuanHoa = chuanHoaTen(ten);
  
  console.log(tenChuanHoa); 
  