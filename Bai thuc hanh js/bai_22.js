// // 22)S(n) = 1/(1 + 1/(1 + 1/(1 + 1/(... 1 /(1/(1 + 1/(1 + 1 )))))))
// let n = 5;
// let ket_qua = 1; 
//     for (let i = 1; i <= n; i++) {
//         ket_qua = 1 / (1 + ket_qua); 
//     }
//     console.log(ket_qua)
const cart = [
    {
      name: "keo",
      price: 1000,
      quantity: 2
    },
    {
      name: "Banh",
      price: 2000,
      quantity: 3
    },
    {
      name: "kem",
      price: 5000,
      quantity: 1
    }
  ]

  const ket_qua = cart.reduce((pre, curr) => (pre +(curr.price * curr.quantity)), 0)
  console.log(ket_qua);