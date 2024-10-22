// làm phẳng mảng
// const arrFlat = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
// ket qua: [0,1,2,3,4,5,6,7,8,9,10,11,12]

const arrFlat = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

const flattened = arrFlat.flat(Infinity); 
console.log(flattened);
