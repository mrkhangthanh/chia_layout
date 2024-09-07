// 13)Tính S(x,n) = x^2 + x^4 +.... + x^2
    let n = 3;
    let x = 1;
    let tong = 0;
    for (let i = 1; i <= n; i++) {
        tong += Math.pow(x, 2 * i);
    }
    console.log(tong);
