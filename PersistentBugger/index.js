function persistence(n, count = 0) {
  let digits = String(n).split("");
  if (digits.length <= 1) {
    const c = count;
    return c;
  }
  digits = digits.map(Number);
  count += 1;
  return persistence(digits.reduce((curr, prev) => curr * prev, 1), count);
}


// Nice Solution 
// const persistence = num => {
//   return `${num}`.length > 1 
//     ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
//     : 0;
// }