// Tìm phần tử khác nhau giữa 2 mảng
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [2, 3, 6];
// gợi ý: !arr1.includes(curr) => pre.push(curr)


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];

// Tìm phần tử khác nhau trong arr1
const uniqueInArr1 = arr1.filter(num => !arr2.includes(num));

// Tìm phần tử khác nhau trong arr2
const uniqueInArr2 = arr2.filter(num => !arr1.includes(num));

// Kết hợp kết quả
const uniqueElements = [...uniqueInArr1, ...uniqueInArr2];

console.log(uniqueElements);
