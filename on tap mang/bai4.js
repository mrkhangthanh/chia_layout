// 4. Cho một mảng các số nguyên. Sử dụng every để kiểm tra xem tất cả các số có phải là số dương không.

let n = [1,3,5,6,4,9];
let result = n.every(num => num > 0);
console.log(result?  "toan so duong" : "co so am");