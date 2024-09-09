
// Cho số n nguyên dương bất kỳ, tính tổng các số từ 1 đến n.
// Cho số nguyên dương x bất kỳ. Viết chương trình tính giai thừa của x.
let n = 4;
let tong = 0;
 for(let i = 0; i <= n; i++){
    tong += i;
 }
 console.log("--> tong cac so tu 1 den = " + tong);

 // Cho số nguyên dương x bất kỳ. Viết chương trình tính giai thừa của x.

 let x = 3;
 let giai_thua = 1;
 for(let i = 1; i <= x; i++) {
   giai_thua *= i;
 }
console.log("--> giai thua cua " + x + " = "  + giai_thua);
