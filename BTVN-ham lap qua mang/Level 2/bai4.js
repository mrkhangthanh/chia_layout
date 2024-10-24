// Tính tổng và tích của mảng
// const arr = [49, 30, 19, 2, 29];


const arr = [49, 30, 19, 2, 29];
// Tính tổng
const sum = arr.reduce((acc, num) => acc + num, 0);
// Tính tích
const product = arr.reduce((acc, num) => acc * num, 1);

console.log(`Tổng: ${sum}`);
console.log(`Tích: ${product}`);
