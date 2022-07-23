const productFib = (prod) => {
  let currProd = 0, n = 0;
  while (currProd <= prod) {
    currProd = fib(n) * fib(n + 1);
    if (currProd === prod) return [fib(n), fib(n + 1), true];
    else if (currProd > prod) return [fib(n), fib(n + 1), false];
    n++;
  }
}

const fib = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(productFib(447577));

// Clever solution
// function productFib(prod){
//   let [a, b] = [0, 1];
//   while(a * b < prod) [a, b] = [b, a + b];
//   return [a, b, a * b === prod];
// }