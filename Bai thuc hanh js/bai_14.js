// 14)Tính S(x,n) = x + x^3 + x^5 +....+ x^(2n+1)
    let n = 3;
    let x = 1;
    let tong = 0;
    for (let i = 0; i <= n; i++) {
        tong += Math.pow(x, 2 * i + 1);
    }
    console.log(tong);