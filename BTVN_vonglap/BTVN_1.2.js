console.log("hello word")
let nhap_so = 12;
for (let i = 1; i <= nhap_so; i++){
    if ( nhap_so < 2){
        console.log("day khong phai la so nguyen to");
    }else if( nhap_so == 2){
        console.log("So la so nguyen to la " + nhap_so);
    }
    break;
}
if (nhap_so >= 3){
    console.log("cac so nguyen to can tim la : ")
    for(let i = 3; i <= nhap_so; i += 2){
        if (nhap_so % i == 0){
            continue;
        }
        else{
            console.log (i)
        }
    }
}
// Bai tap nay chua lam duoc