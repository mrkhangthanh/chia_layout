// Bài 3:
// Cho chuỗi có cả chữ và số, tính tổng các số trong chuỗi,
// Ví dụ: “ab1k2p3” => tổng: 1 + 2 + 3 = 6


function sumNumbersInString(str) {
    // Tìm tất cả các chuỗi con là số trong chuỗi (sử dụng regex)
    const numbers = str.match(/\d+/g);
    
    // Nếu không có số nào trong chuỗi, trả về 0
    if (!numbers) return 0;
    
    // Chuyển mỗi chuỗi số thành số và tính tổng
    return numbers.map(Number).reduce((acc, num) => acc + num, 0);
  }
  
  // Ví dụ sử dụng
  const inputString = "ab5c1d2ff3x";
  const total = sumNumbersInString(inputString);
  console.log("Tổng các số trong chuỗi là:", total);

