const stdin = require("fs").readFileSync("/dev/stdin", "utf8");
const ascending = (a, b) => a - b;
const ricecakes = stdin.split("\n").slice(1).map(Number).sort(ascending);
const arrangeable = ((v, i, a) => a.indexOf(v) === i) |> ricecakes.filter;
console.log(arrangeable.length);