console.log("hello word")
let a = 5;
let b = 5;
let c = 5;
if (((a+b)>c || (a+c)>b || (b+c)>a) && a!=0 && b!=0 && c!=0){
    console.log("-- Cac so tren co the tao thanh mot tam giac");
}
else if(a==0 || b==0 || c==0) {
    console.log("-- cac so tren khong tao ra tam giac");
}
if (((a*a == b*b + c*c)||(b*b == a*a + c*c)||(c*c == b*b + a*a)) && (a!=0 && b!=0 && c!=0) ){
    console.log("-- Day la tam giac vuong");
}

if( a==b && b==c){
    console.log("-- Day la tam giac deu");
    
}

else if(((a==b && b!=c) || (a==c && c!=b) || (b==c && c!=a))&& a!=0 && b!=0 && c!=0){
    console.log("-- Day la tam giac Can")

}
