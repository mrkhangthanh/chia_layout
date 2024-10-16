// Bài 1: Sắp xếp mảng sau theo thứ tự độ tuổi giảm dần
// [
//   { name: 'name1', age: 12 },
//   { name: 'name2', age: 20 },
//   { name: 'name3', age: 15 },
//   { name: 'name4', age: 10 },
//   { name: 'name4', age: 27 }
// ]


let n = [
    { name: 'name1', age: 12 },
    { name: 'name2', age: 20 },
    { name: 'name3', age: 15 },
    { name: 'name4', age: 10 },
    { name: 'name4', age: 27 }
  ];
  let ket_qua = n.sort((a, b) => a.age - b.age);
  console.log(ket_qua);