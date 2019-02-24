const stdin = require("fs").readFileSync("/dev/stdin", "utf8");
const [A, B, C, X] = stdin.split("\n").map(Number);
const price = amount => count => amount * count;
const pA = [...Array(A + 1).keys()].map(price(500));
const pB = [...Array(B + 1).keys()].map(price(100));
const pC = [...Array(C + 1).keys()].map(price(50));
const pattern = pA.map(a => pB.map(b => pC.map(c => a + b + c)));
console.log(pattern.flat(2).filter(v => v === X).length);