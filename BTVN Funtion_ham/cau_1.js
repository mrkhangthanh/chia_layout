// BTVN
// Câu 1: Cho một chuỗi str, tìm ký tự không lặp lại đầu tiên trong chuỗi đó và trả về chỉ số của nó.Nếu nó không tồn tại, trả về -1.
// Ví dụ:
// case1
// Input: str = "tranduong"
// Output: 0
// case2
// Input: str = "hitclubhiuhiu"
// Output: 2
// case3
// Input: str = "aabb"
// Output: -1
// Gợi ý: dùng indexOf và lastIndexOf


// function firstUniqueChar(str) {
//     // Duyệt qua từng ký tự trong chuỗi
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];

        
//         // Kiểm tra nếu indexOf và lastIndexOf trùng nhau, tức là ký tự không lặp lại
//         if (str.indexOf(char) === str.lastIndexOf(char)) {
//             return i; // Trả về chỉ số của ký tự không lặp lại đầu tiên
//         }
//     }

//     return -1; // Nếu không có ký tự nào không lặp lại, trả về -1
// }

// let str = "lmavmalsckript";
// console.log(firstUniqueChar(str)); // Kết quả: 4 (ký tự 'v')
function kyTuTrungLap(VanBan){
    for(let i = 0 ; i < VanBan.length; i++) {
        let char = VanBan[i];
        if (VanBan.indexOf(char) ===  VanBan.lastIndexOf(char)){
            return i;
        }
    }
   return -1;
}
let VanBan = 'mauymegnvana';
console.log(kyTuTrungLap(VanBan));




