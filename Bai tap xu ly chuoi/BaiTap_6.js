// Bài tập 6: Đếm số từ
// Viết một hàm nhận vào một chuỗi và trả về số lượng từ trong chuỗi. Ví dụ: Nếu chuỗi là "This is a sentence.", hàm sẽ trả về 4.


function countWords(str) {
    const words = str.trim().split(/\s+/);
    return words.filter(word => word !== '').length; 
  }
  console.log(countWords("This is a    sentence.")); 
 

