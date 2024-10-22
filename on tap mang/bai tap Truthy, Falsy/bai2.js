// 2. Viết một hàm kiểm tra xem một giá trị cho trước có phải là "falsy" hay không.

function isFalsy(giaTri){
    return !Boolean(giaTri);
};
console.log(isFalsy("Hello"));  
console.log(isFalsy([]));       
console.log(isFalsy(null));  
console.log(isFalsy(0));   
