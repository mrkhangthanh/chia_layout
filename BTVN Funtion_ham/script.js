/*
+ function, các cách viết function trong js
+ function: hàm, chương trình con
+ Viết hàm kiểm tra 1 số có phải số nguyên tố hay k, nếu có trả về true, k phải thì trả về false

*/ 
/*
c1
function isPrime(n){ 
  for (let i = 2; i <= Math.sqrt(n); i++){
    if (n % i === 0){
      return false;
    }
  }

  return n >= 2;
}

// C2: function expression
const isPrime = function(n){
  for (let i = 2; i <= Math.sqrt(n); i++){
    if (n % i === 0){
      return false;
    }
  }

  return n >= 2;
}
 
// C3: arrow function
const isPrime = (n = 11) => {
  for (let i = 2; i <= Math.sqrt(n); i++){
    if (n % i === 0){
      return false;
    }
  }

  return n >= 2;
} 
*/

/*
- chuỗi trong js, các hàm xử lý chuỗi trong js
  + các chuỗi đặc biệt: \n, \t, \b, ...
  + String method ():
    1. length 
    2. charAt()
    3. charCodeAt()
    4. slice(start, end)
    5. substring(start, end)
    6. replace(searchString, replaceString), replaceAll()
    7. toUpperCase()
    8. toLowerCase()
    9. concat()
    10. trim()
    11. split(string), join(string)
    12. includes(value)
  + String search method:
    13. indexOf()
    14. lastIndexOf()
    15. startsWith()
    16. endsWith()
  + Template string: `hello ${}`;

- Số, làm việc với số:
  + Number method: toString(), toFixed()
  + Các hàm chuyển chuỗi sang số: parseInt(), parseFloat(), Number(), +
*/ 

// let a = "123.2364567"; 


// console.log(parseFloat(a));
// console.log(parseInt(a));
// console.log(Number(a));
// console.log(+a);

// let a = " sdfasduasdfn ";
// console.log(a.trim());
// let a = " sdfasduasdfn ";
// // console.log(a.trim());
// console.log(a.length);
// let b = (a.trim());
// console.log(b.length);
// let c = a.split("");
// console.log(c);
// let d = a.slice(0, 3)
// console.log(d);
// console.log(a.charAt(6));

function kiemTraKyTu(chuoi){
  for(let i = 0; i < chuoi.length; i++){
    let char = chuoi[i];
   
  }
  console.log(chuoi[i]);
}
let chuoi = 'nguyenvana';
console.log(chuoi.lastIndexOf("n"));



