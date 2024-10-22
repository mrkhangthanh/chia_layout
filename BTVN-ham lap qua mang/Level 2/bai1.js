// Tính tổng tiền thanh toán của giỏ hàng sau
const cart = [
  {
    title: "DẾ MÈN PHIÊU LƯU KÝ",
    price: 50000,
    quantity: 2,
  },
  {
    title: "KIM ĐỒNG",
    price: 40000,
    quantity: 7,
  },
  {
    title: "NGỌN LỬA ĐÊM BA MƯƠI",
    price: 21000,
    quantity: 4,
  },
  {
    title: "CÔ BÉ GANH TỊ",
    price: 27500,
    quantity: 5,
  },
];
// let tongTien = 0;
// for(let i in cart){
//   tongTien = tongTien + cart[i].price * cart[i].quantity;
// }
// console.log(tongTien);

let tongTien = cart.reduce((truocDo, hienTai)=>{
 return truocDo + hienTai.price * hienTai.quantity;
},0);
console.log(tongTien);




// const cart = [
//     {
//       title: "DẾ MÈN PHIÊU LƯU KÝ",
//       price: 50000,
//       quantity: 2,
//     },
//     {
//       title: "KIM ĐỒNG",
//       price: 40000,
//       quantity: 7,
//     },
//     {
//       title: "NGỌN LỬA ĐÊM BA MƯƠI",
//       price: 21000,
//       quantity: 4,
//     },
//     {
//       title: "CÔ BÉ GANH TỊ",
//       price: 27500,
//       quantity: 5,
//     },
//   ];
  
//   function tinhTien(a, b){
//     return a + b.price * b.quantity;
//   }
//   const thanhToan = cart.reduce((tinhTien),0);
//   console.log(thanhToan);