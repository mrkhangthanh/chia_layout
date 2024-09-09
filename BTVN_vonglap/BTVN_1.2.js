// Viết chương trình in các số nguyên tố trong khoảng 1 đến n
let n = 12;

for (let i = 1; i <= n; i++){
    if(i >= 2){
        let snt = true;
        for( let j = 2; j < i; j++){
            if(i % j === 0){
                snt = false;
                break;
            }
        }
        if(snt){
            console.log(i);
        }
    }
}