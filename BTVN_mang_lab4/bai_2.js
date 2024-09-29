// 2. Cho n số nguyên. Tìm xem phần tử lớn nhất xuất hiện trong dãy mấy lần.

let n = [ 10, 6, 8,11,3, 6 ,1]
let countPhanTuMax = 0;
let phanTuMax = Math.max(...n);
console.log("Phan Tu lon nhat trong mang la : " + phanTuMax);

for(let i = 0; i < n.length; i++){
    if(n[i] === phanTuMax){
        countPhanTuMax++;
    }
}
console.log("Phan tu lon nhat xuat hien : " + countPhanTuMax + " lan trong mang");