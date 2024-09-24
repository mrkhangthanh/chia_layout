// Viết một hàm nhận vào một chuỗi và chuyển đổi nó sang dạng title case (chữ cái đầu mỗi từ viết hoa). 
// Ví dụ: Nếu chuỗi là "welcome to javascript", hàm sẽ trả về "Welcome To Javascript".

function toTitleCase(str) {
    return str
      .toLowerCase() 
      .split(' ')  
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))  
      .join(' ');  
}
  console.log(toTitleCase("welcome to javascript"));  
  console.log(toTitleCase("HELLO WORLD"));           
  console.log(toTitleCase("javaScript is fun"));     
  