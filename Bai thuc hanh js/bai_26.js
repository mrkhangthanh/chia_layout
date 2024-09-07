// 26)Hãy đếm số lượng chữ số lẻ của số nguyên dương n
let n = 9;
let dem = 0;
for(let i = 1; i <= n; i++ ){
    if(i % 2 !== 0 ){
        dem++;
    }
}
console.log(dem);