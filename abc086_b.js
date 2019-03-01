const stdin = require("fs").readFileSync("/dev/stdin", "utf8");
const n = stdin.split(" ").join("") |> Number;
Math.sqrt(n) |> Number.isInteger ? "Yes" : "No" |> console.log;