// 1. Viết một hàm kiểm tra xem một giá trị cho trước có phải là "truthy" hay không.


  function isTruthy(giaTri) {
    return Boolean(giaTri);
  }
  console.log(isTruthy("Hello"));  
  console.log(isTruthy([]));       
  console.log(isTruthy(null));  
  console.log(isTruthy(0));        
  