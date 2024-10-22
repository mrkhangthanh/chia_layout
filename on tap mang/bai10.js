// 10. Cho một mảng các số nguyên. Sử dụng reduce để tính tổng của các số trong mảng.

let n = [1,2,3,3,4];
let result = n.reduce((pre, curr) => {
    return pre + curr; 
},0);
console.log("tong cac phan tu trong mang = " + result);