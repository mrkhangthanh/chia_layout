// 5. Cho một mảng các số nguyên. Sử dụng some để kiểm tra xem có số âm nào trong mảng không.

let n= [ 3,9,0,3,5,7,-8];
let result = n.some(num => num < 0);
console.log(result? "co so am" : "khong co so am");