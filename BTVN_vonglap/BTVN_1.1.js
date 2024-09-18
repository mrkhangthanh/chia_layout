// Cho số nguyên n bất kỳ. 
// Viết chương trình in các số chẵn trong khoảng 1 đến n.

// let n = 10;
// let doi_chuoi = n.toString().split('');

// for( let i = 0; i < doi_chuoi.length; i++){
//     let so_nguyen = parseInt(doi_chuoi[i]);
//     if ( so_nguyen % 2 === 0) {
//         console.log(so_nguyen);
//     }
// }

let n = 10 

for(let i = 1; i <= n; i++){
    if( i % 2 === 0){
        console.log(i);
    }
}
