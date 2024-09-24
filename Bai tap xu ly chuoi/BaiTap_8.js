// Viết một hàm nhận vào một chuỗi, một chuỗi con cần thay thế và một chuỗi thay thế,
//  sau đó trả về chuỗi mới sau khi thay thế. Ví dụ: Nếu chuỗi là "Hello, world!", chuỗi con cần thay thế là "world" 
//  và chuỗi thay thế là "universe", 
// hàm sẽ trả về "Hello, universe!"

function nhapChuoi(str){
   str = str.replace('world', 'universe')
   return str; 
}

let str = "hello, world";
console.log(nhapChuoi(str));