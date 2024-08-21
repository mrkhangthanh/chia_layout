console.log("hello word")
let a = 3;
let b = 9;
let c = 5;
let den_ta = (Math.pow(b, 2))-(4*a*c);

//giai phuong trinh ax2+bx+c=0 

if( a == 0 ){ 
    console.log(" Phuong trinh co 1 nghiem x = " + -c/b);
}
if ( a!= 0 && den_ta < 0){
    console.log(" Ta co Δ = "+(den_ta));
    console.log(" Phuong Trinh Vo nghiem");
}
else if ( a!= 0 && den_ta > 0){
    console.log(" Ta co Δ = "+(den_ta));
    console.log(" Phuong Trinh co 2 nghiem x1 = "+ ((-b)+Math.sqrt(den_ta))/(2*a)+(" Va nghiem x2 = ")+ ((-b)-Math.sqrt(den_ta))/(2*a) );
    
}
else if( a!= 0 && den_ta == 0 ){
    console.log(" Phuong trinh co nghiem kep x1 = x2 =" + (-b)/(2*a));
}