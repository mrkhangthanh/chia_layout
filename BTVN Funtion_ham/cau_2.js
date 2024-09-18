// Câu 2:
// Cho mảng các thành viên sau:
// const listPersons = [
//     { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
//     { name: "Lê Văn Nam", age: 60, gender: "nam" },
//     { name: "Trần Chiến Công", age: 8, gender: "nam" },
//     { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
//     { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
//     { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
//     { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" }, 
//     { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
//     { name: "Lê Văn Hà", age: 55, gender: "nam" },
//   ]


// Yêu cầu:
// Đếm số lượng thành viên nam và nữ
// Thống kê số lượng người già, thanh niên và trẻ con và in ra một object có cấu trúc như sau: 
// {
//     treCon: 0,
//     thanhNien: 0,
//     nguoiGia : 0
// }
// Biết rằng: age >=30 => người già
// 	      age >= 18 => thanh niên
// còn lại là trẻ con  
// Gợi ý: dùng for và if else cơ bản


const listPersons = [
    { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
    { name: "Lê Văn Nam", age: 60, gender: "nam" },
    { name: "Trần Chiến Công", age: 8, gender: "nam" },
    { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
    { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
    { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
    { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" }, 
    { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
    { name: "Lê Văn Hà", age: 55, gender: "nam" }
  ];
  
  // Khởi tạo biến đếm cho giới tính
  let countNam = 0;
  let countNu = 0;
  
  // Khởi tạo object để thống kê số lượng người già, thanh niên và trẻ con
  let thongKeTuoi = {
    treCon: 0,
    thanhNien: 0,
    nguoiGia: 0
  };
  
  // Duyệt qua mảng listPersons
  for (let person of listPersons) {
    // Đếm số lượng nam và nữ
    if (person.gender === "nam") {
      countNam++;
    } else if (person.gender === "nữ") {
      countNu++;
    }
  
    // Thống kê số lượng người già, thanh niên và trẻ con
    if (person.age >= 30) {
      thongKeTuoi.nguoiGia++;
    } else if (person.age >= 18) {
      thongKeTuoi.thanhNien++;
    } else {
      thongKeTuoi.treCon++;
    }
  }
  
  // In kết quả
  console.log(`Số lượng nam: ${countNam}`);
  console.log(`Số lượng nữ: ${countNu}`);
  console.log(thongKeTuoi);
  