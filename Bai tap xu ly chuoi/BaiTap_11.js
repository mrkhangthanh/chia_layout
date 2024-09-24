// Viết một hàm nhận vào một chuỗi và chuyển đổi nó sang dạng Camel Case (chữ cái đầu mỗi từ viết hoa, loại bỏ khoảng trắng).
//  Ví dụ: Nếu chuỗi là "hello world of programming", hàm sẽ trả về "helloWorldOfProgramming".

function nhapChuoi(str){
    str = str.trim().split(/\s+/);
    let t = str[0].toUpperCase();
    return t;
}

let str = "hello world of programming";
console.log(nhapChuoi(str));