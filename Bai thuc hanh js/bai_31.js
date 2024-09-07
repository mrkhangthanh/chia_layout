// 31)Tìm chữ số lớn nhất của số nguyên dương n


let solonnhat = 0;
let n = 4982;
let doichuoi = n.toString().split('');

for(let i = 0; i < doichuoi.length; i++){
    let doi_so_nguyen = parseInt(doichuoi[i]);
    if(doi_so_nguyen > solonnhat){
        solonnhat = doi_so_nguyen;
    }
}
console.log(solonnhat);
