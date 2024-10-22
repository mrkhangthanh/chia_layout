// Nhóm các cầu thủ theo quốc gia
// const team = [
//   { name: "Công Phượng", country: "Việt Nam" },
//   { name: "Ronaldo", country: "Portugal" },
//   { name: "Quang Hải", country: "Việt Nam" },
//   { name: "Messi", country: "Argentina" },
//   { name: "Nani", country: "Portugal" },
// ]; bang js


const team = [
    { name: "Công Phượng", country: "Việt Nam" },
    { name: "Ronaldo", country: "Portugal" },
    { name: "Quang Hải", country: "Việt Nam" },
    { name: "Messi", country: "Argentina" },
    { name: "Nani", country: "Portugal" },
  ];
  
  // const nhomTheoQuocGia = team.reduce((truocDo, hienTai) => {
  //   // Kiểm tra xem quốc gia đã tồn tại trong acc chưa
  //   if (!truocDo[hienTai.country]) {
  //     truocDo[hienTai.country] = []; // Tạo mảng mới nếu chưa tồn tại
  //   }
  //   truocDo[hienTai.country].push(hienTai.name); // Thêm tên cầu thủ vào mảng tương ứng
  //   return truocDo;
  // }, {});
  
  // console.log(nhomTheoQuocGia);
  
  const  result = team.reduce((pre, curr)=>{
    const country = curr.country;
    if(pre[country]){
      pre[country].push(curr);
    }else{
      pre[country]=[];
      pre[country].push(curr);
    }
    return pre;
  },{});
  console.log(result);