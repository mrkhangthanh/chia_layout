// 33)Hãy kiểm tra số nguyên dương n có toàn chữ số lẻ hay không ?

let n = 5793;
let doichuoi = n.toString().split('');
let toanle = "day la so toan le";

for (let i = 0; i < doichuoi.length; i++){
    sotunhien = parseInt(doichuoi[i]); 
    if(sotunhien % 2 !== 0){
        toanle = n + " day la so toan le";
     }
     else{
        toanle = n + " day khong phai la so toan le";
     }
}
    console.log(toanle);
    
     
   
    

    