const stdin = require("fs").readFileSync("/dev/stdin", "utf8");
const ascending = (a, b) => a - b;
const ricecakes = stdin.split("\n").slice(1).map(Number).sort(ascending);
const arrangeable = ricecakes.filter((v, i, a) => a.indexOf(v) === i);
console.log(arrangeable.length);