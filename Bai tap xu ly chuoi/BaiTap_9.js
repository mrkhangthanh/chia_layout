// Viết một hàm nhận vào một chuỗi chứa tên đầy đủ (bao gồm họ, tên đệm và tên), 
// sau đó trả về một đối tượng có các thuộc tính họ, tên đệm và tên.
//  Ví dụ: Nếu chuỗi là "Nguyễn Văn A", hàm sẽ trả về đối tượng { firstName: "Nguyễn", middleName: "Văn", lastName: "A" }.

function splitFullName(fullName) {
    let nameParts = fullName.trim().split(/\s+/);
    console.log(nameParts);
    if (nameParts.length === 1) {
      return { firstName: nameParts[0], middleName: '', lastName: '' };
    }
    if (nameParts.length === 2) {
      return { firstName: nameParts[0], middleName: '', lastName: nameParts[1] };
    }
    let firstName = nameParts[0]; 
    let lastName = nameParts[nameParts.length - 1]; 
    let middleName = nameParts.slice(1, nameParts.length - 1).join(' '); 
    return { firstName, middleName, lastName };
  }
  
  console.log(splitFullName("  Nguyễn    Văn A  "));
 
  
  
  
  