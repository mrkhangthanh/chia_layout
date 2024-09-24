// Bài tập 1: Đảo ngược chuỗi
// Viết một hàm nhận vào một chuỗi và trả về chuỗi đảo ngược của nó. Ví dụ: Nếu nhập vào "Hello", hàm sẽ trả về "olleH".

function daoNguoc(str){
    return str.split("").reverse().join("");
}
const str = "Hello";
console.log(" chuoi dao nguoc cua " + str + " la: " + daoNguoc(str));





