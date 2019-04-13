const getDivisor = (n) => {
    let results = [];
    for (let i = 1; i <= n; i++){
        if (n % i == 0){
            results.push(i);
        }
    }
    return results;
}



const stdin = require("fs").readFileSync("/dev/stdin", "utf8");
const N = Number(stdin);
let c = 0;
for (i = 2; i <= N; i++){
	c += getDivisor(i).length;
}
const mn = 1000000000 + 7;
console.log(c % mn);
