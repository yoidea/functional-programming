const stdin = require("fs").readFileSync("/dev/stdin", "utf8");
const descending = (a, b) => b - a;
const cards = stdin.split("\n")[1].split(" ").map(Number).sort(descending);
const sum = (a, c) => a + c;
const alice = cards.filter((v, i) => i % 2 === 0).reduce(sum);
const bob = cards.filter((v, i) => i % 2 !== 0).reduce(sum);
console.log(alice - bob);