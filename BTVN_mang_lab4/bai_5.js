// 5. Cho n số và số x.
// a. Xác định xem số x có xuất hiện trong dãy không?
// b. Cho biết số x xuất hiện trong dãy bao nhiêu lần và tại các vị trí nào?
// c. Loại bỏ khỏi dãy tất cả các phần tử bằng x. In cả 2 dãy ra màn hình.

// a. Xác định xem số x có xuất hiện trong dãy không?
// let n = [3,5,2,7,5];
// let x = 4;
// let xuatHien = false;
// for (let i = 0; i < n.length; i++) {
//     if(n[i] === x){
//        xuatHien = true;
//     } 
// }
// console.log(xuatHien? + x + " - co xuat hien" : + x + " - khong xuat hien");
// Cach thu 2 : 
// let n = [3,6,5,1,8,9]
// let x = 2;
// let ketQua = n.some(num => num === x);
// console.log(ketQua? " co trong mang" : " khong co trong mang");

// b. Cho biết số x xuất hiện trong dãy bao nhiêu lần và tại các vị trí nào?

// let n = [3,5 ,2,7,5 ,3];
// let x = 5;
// let demX = 0;
// let viTri = [];

// for(let i = 0; i < n.length; i++){
//     if(n[i] === x){
//         demX++;
//         viTri.push(i);
//     }
// }
// if(viTri > 0){
//     viTri = viTri.join("");
//     console.log("tai Vi tri : " + viTri);
// }
// console.log("so: " + x + " Xuat Hien " + demX + " Lan trong day");
// console.log("tai Vi tri : " + viTri);

// c. Loại bỏ khỏi dãy tất cả các phần tử bằng x. In cả 2 dãy ra màn hình.


// let n = [3,5 ,2,7,5 ,3];
// let mangCu = [...n];
// let x = 3;
// let loaiBo = n.filter(function(item){
//     return item !== x;
// });
// console.log(mangCu);
// console.log(loaiBo);