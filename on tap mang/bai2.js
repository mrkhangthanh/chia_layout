// 2. Cho một mảng các số nguyên. Sử dụng map để tạo một mảng mới chứa bình phương của mỗi số.

let n = [2,5,4,7,2,3];
let newArr = n.map(num =>{
   return num*num
});
console.log(newArr);
