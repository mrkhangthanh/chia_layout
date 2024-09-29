// Bài 1: Khai báo 1 mảng số nguyên
// Kiểm tra mảng có 2 số chẵn gần nhau hay không, in ra (YES/NO)
// tách mảng ban đầu thành 2 mảng: một mảng chứa toàn số lẻ, 
// một mảng chứa toàn số chẵn (số 0 bỏ qua). in 2 mảng ra màn hình cách nhau bởi ký tự ‘-’ (lẻ - chẵn). Nếu một trong 2 mảng có số phần tử bằng 0 thì in ra -1
// sắp xếp mảng theo thứ tự giảm dần và in ra màn hình

let a = [1, 3, 6, 8, 5];
let c = " No ";

function sapXep(a){
    a = a.sort((a, b) => b - a);
    return(a);
}

// sắp xếp mảng theo thứ tự giảm dần và in ra màn hình
console.log("sắp xếp mảng theo thứ tự giảm dần : ",sapXep(a));

// Kiểm tra mảng có 2 số chẵn gần nhau hay không, in ra (YES/NO)
let kiemTra = false;
for(let i = 0; i < a.length; i++){
    if(a[i] % 2 === 0 & a[i + 1] % 2 === 0){
        kiemTra = true;
        break;
    }
}
console.log (kiemTra ? "yes" : "no");

function tachMang(arr) {
    let mangLe = [];
    let mangChan = [];

    // Duyệt qua từng phần tử của mảng
    arr.forEach(num => {
        if (num === 0) return;  // Bỏ qua số 0
        if (num % 2 === 0) {
            mangChan.push(num);  // Nếu là số chẵn (khác 0)
        } else {
            mangLe.push(num);    // Nếu là số lẻ
        }
    });

    // Kiểm tra nếu một trong hai mảng rỗng
    if (mangLe.length === 0 || mangChan.length === 0) {
        console.log(-1);
    } else {
        // In ra hai mảng cách nhau bởi dấu '-'
        console.log(`${mangLe} - ${mangChan}`);
    }
}

// Ví dụ
const arr = [1, 2, 3, 0, 4, 5, 6, 7, 8, 9, 0];
tachMang(arr);
