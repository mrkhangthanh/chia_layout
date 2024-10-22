// 3. Cho một mảng các số nguyên. Sử dụng filter để tạo một mảng mới chứa các số lẻ.

let n = [3, 4,7,5,9,2,8];
let result = n.filter(num =>{
    return num % 2 !==0;
});
console.log(result);