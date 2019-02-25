const stdin = require("fs").readFileSync("/dev/stdin", "utf8");
const n = Number(stdin.split(" ").join(""));
console.log(Number.isInteger(Math.sqrt(n)) ? "Yes" : "No");