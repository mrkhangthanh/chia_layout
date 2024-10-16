
// Bài 4: Cho mảng sau
// [
//   { name: 'name1', count: 13 },
//   { name: 'name3', count: 23 },
//   { name: 'name1', count: 25 },
//   { name: 'name2', count: 27 },
//   { name: 'name3', count: 30 },
//   { name: 'name2', count: 20 }
// ]

// Viết code nhóm các user có cùng name và cộng tổng số count thành một mảng mới

const n = [
    { name: 'name1', count: 13 },
    { name: 'name3', count: 23 },
    { name: 'name1', count: 25 },
    { name: 'name2', count: 27 },
    { name: 'name3', count: 30 },
    { name: 'name2', count: 20 }
  ];
  
  const nhomN = n.reduce((acc, curr) => {
const kiemTracoKo = acc.find(item => item.name === curr.name);
    if (kiemTracoKo) {
      kiemTracoKo.count += curr.count;
    } else {
      acc.push({ name: curr.name, count: curr.count });
    }
  
    return acc;
  }, []);
  
  console.log(nhomN);
  