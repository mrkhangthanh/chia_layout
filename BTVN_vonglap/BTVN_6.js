// Cho một số nguyên dương n. Viết chương trình kiểm tra số n có phải là số hoàn hảo hay không? 
let n = 28;
let sum = 0;
let dem = 0;
for (let i = 1; i <= n / 2 ; i++) {
    if (n % i === 0) {
        sum += i;
        if ( sum === n) {
            console.log(" day la so hoan hao");
        } 
    }
    }
