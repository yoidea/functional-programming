const splitByLength = (str, length) => {
    var resultArr = [];
    if (!str || !length || length < 1) {
        return resultArr;
    }
    var index = 0;
    var start = index;
    var end = start + length;
    while (start < str.length) {
        resultArr[index] = str.substring(start, end);
        index++;
        start = end;
        end = start + length;
    }
    return resultArr;
}

const stdin = require("fs").readFileSync("/dev/stdin", "utf8");
const input = stdin.trim();
const splitedS = splitByLength(input, 10);
// console.log(splitedS);
const V = splitedS.map(stringS => {
	S = parseInt(stringS, 2);
	const T = "10".repeat(5).slice(0, S.length);
	const R = S ^ parseInt(T, 2);
	// console.log(R.toString(2));
	const count = (R.toString(2).match( /1/g ) || []).length;
	return count;
});
// console.log(V);
const sum = V.reduce((acc, cur) => {
  return acc + cur;
}, 0);
// console.log(sum);
if (input.length - sum > sum){
	console.log(sum);
} else {
	console.log(input.length - sum);
}