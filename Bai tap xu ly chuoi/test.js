// let a = "maddamm";
// let c = a.split('');
// let b = a.slice(1, 3);
// let d = c[0];
// console.log(c);
// console.log(b);
// console.log(d);

let a = 2;
if ( a <=2 ) {
    console.log( "day khong phai snt")

}
if( a > 2 ){
    for(let i = 2; i <= Math.sqrt(a); i++){
        if (a % i === 0) {
            console.log("day khong phai snt");
            break;
        }
        else {
            console.log('day la so nt')
            break;
        }
    }
}    

    

