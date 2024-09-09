// Cho một số nguyên dương n bất kỳ. Viết chương trình kiểm tra số n có phải là số nguyên tố không?
let n = 11;
if (n >=2 ){
    let snt = true;
    for( let i = 2; i < n; i++){
        if(n % i === 0 ){
            console.log(n + "  khong phai so nguyen to")
            snt = false;
            break;
        }
    }
    if(snt){
        console.log(n + " la so nguyen to");

    }
} else {
    console.log('khong phai snt');
}