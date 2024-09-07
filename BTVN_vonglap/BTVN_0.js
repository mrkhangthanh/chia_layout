let n = 10;
// let songuyento = true;
if( n <= 2 ){
    console.log('day khong phai snt');
}
if( n >= 3){
    for( let i = 3; i < n; i++){
        if (n % i == 0){
            console.log(n + ' khong phai la snt');
            break;
        }
        else {
            console.log("day la so nguyen to")
        }
        
    }

}
