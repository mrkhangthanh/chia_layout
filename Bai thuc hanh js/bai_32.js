// 32)Tìm chữ số nhỏ nhất của số nguyên dương n
let n = 4983;
let sonhonhat = 9;
let doichuoi = n.toString().split('');

for(let i = 0; i < doichuoi.length; i++){
    let doi_so_nguyen = parseInt(doichuoi[i]);
    if(doi_so_nguyen < sonhonhat){
        sonhonhat = doi_so_nguyen;
    }
}
console.log(sonhonhat);
