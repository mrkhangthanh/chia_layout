// Bài tập 2: Đếm số lượng ký tự
// Viết một hàm nhận vào một chuỗi và một ký tự, sau đó trả về số lần xuất hiện của ký tự đó trong chuỗi. Ví dụ: Nếu chuỗi là
//  "programming" và ký tự là "m", hàm sẽ trả về 2.

function nhapChuoiVaKyTu(str, char) {
    let dem = 0;
    for (let i = 0; i < str.length; i++) { 
      if (str[i] === char) {
        dem++;  
      }
    }
    return dem;
  }

  const str = "programming";
  const char = "n";
  console.log(" ky tu " + "'" + char + "'" + " xuat hien " + nhapChuoiVaKyTu(str, char) + " lan trong chuoi"); 
  

