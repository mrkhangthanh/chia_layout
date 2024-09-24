// Viết một hàm nhận vào một chuỗi và loại bỏ tất cả các khoảng trắng thừa trong chuỗi.
//  Ví dụ: Nếu chuỗi là " Hello     world    ", hàm sẽ trả về "Hello world"

function NhapChuoi(str) {
    const words = str.split(/\s+/);
    console.log(words)
    return words.join(' ').trim();
  }
  const str = " Hello    world     xin    chao ";
  console.log(NhapChuoi(str)); 