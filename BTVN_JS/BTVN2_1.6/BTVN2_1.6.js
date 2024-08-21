console.log("hello word");
let a =  3;
let b = 4;
let c = 5;
let nua_chu_vi = ((a+b+c)/2);
let cosA = (Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2))/(2*b*c);
let tgA = Math.sqrt((1/(Math.pow(cosA, 2)))-1);
let cosB = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(b, 2))/(2*a*c);
let tgB = Math.sqrt((1/(Math.pow(cosB, 2)))-1);
let cosC = (Math.pow(c, 2) + Math.pow(a, 2) - Math.pow(c, 2))/(2*b*a);
let tgC = Math.sqrt((1/(Math.pow(cosC, 2)))-1);


if (a == 0 || b == 0 || c == 0){
    console.log("Day khong phai la tam giac");
}
if(a != 0 && b !=0 && c !=0){
    console.log(" - Day la tam giac");
    console.log(" - Tam giac nay co chu vi = " + (a + b + c));
    console.log(" - Tam giac nay co dien tich = " + (Math.sqrt(nua_chu_vi*((nua_chu_vi - a)*(nua_chu_vi - b)*(nua_chu_vi - c)))));
    console.log(" - tgA = "+ tgA);
    console.log(" - tgB = " + tgB);
    console.log(" - tgC = " + tgC);
}
