console.log("hello word");

chu_cai('Mkt');
function chu_cai(str)
{
   kiem_tra = /^[A-Z]/;
   if (kiem_tra.test(str))
    {
      console.log("Chữ cái đầu tiên của chuỗi là chữ hoa");
    } 
    else
    {
     console.log("Chữ cái đầu tiên của chuỗi la chu in thuong");
    }
}
