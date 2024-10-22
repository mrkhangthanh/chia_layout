// Bài tập vận dụng:
// 1. Cho 1 chuỗi ký tự, đếm số lần xuất hiện của từng ký tự
// 2. Tìm chuỗi con dài nhất không chứa ký tự trùng lặp
// Viết một hàm nhận vào một chuỗi và trả về độ dài của chuỗi con dài nhất mà không chứa bất kỳ ký tự nào được lặp lại.


let n = "abdabderdsd";
function demKyTu(n) {
    const charCount = {}; 
    for (let char of n) {
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    return charCount; 
  }
  console.log(demKyTu(n));
console.log("===============");
  