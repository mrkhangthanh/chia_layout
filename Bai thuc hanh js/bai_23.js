

let n = 2849592845;
let dem = 1;

for(let i = 0; i <= n; i++){
    n = Math.floor(n / 10);
    dem++;
}
console.log(dem);