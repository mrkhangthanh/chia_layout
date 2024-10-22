// 1. Viết một hàm nhận vào hai mảng và trả về một mảng mới chứa tất cả các phần tử từ hai mảng gộp lại.
//  Sử dụng spread operator để làm điều này.



let n = [5,4,8,9,6,3];
let n2 = [ 6,7,8,5,8,45];
let result = [...n,...n2];
console.log(result);