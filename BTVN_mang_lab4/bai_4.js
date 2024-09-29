// 4. Cho n số. Đảo thứ tự của dãy theo nguyên tắc sau: A[1] đổi cho với A[n], A[2] đổi cho với A[n-1], ...
// In kết quả ra màn hình.

function daoMang(arr) {
    let n = arr.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
      // Đổi chỗ A[i] với A[n - 1 - i]
      let giaTri = arr[i];
      arr[i] = arr[n - 1 - i];
      arr[n - 1 - i] = giaTri;
    }
    return arr;
  }
  
  let arr = [1, 2, 3, 4, 5, 6];
  console.log("Dãy trước khi đảo:", arr);
  
  let reversedArr = daoMang(arr);
  console.log("Dãy sau khi đảo:", reversedArr);
  