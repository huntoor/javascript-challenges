function digPow(n, p) {
  const digits = convertNumtoDigits(n);

  const result = digits.reduce((prev, curr, index) => {
    return prev + Math.pow(curr, (p + index));
  }, 0);

  const k = result / n;
  if (!Number.isInteger(k)) return -1;

  return k;
}

function convertNumtoDigits(n) {
  const stringDigits = n.toString().split(""); //convert input number to string and split them
  return stringDigits.map(Number); //convert splited digits and return array of digits (number)
}

console.log(digPow(46288, 3));

// lol you can do better but yaa gj brah
// function digPow(n, p) {
//   var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//   return x % n ? -1 : x / n
// }
