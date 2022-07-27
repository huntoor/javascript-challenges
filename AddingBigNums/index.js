function add(a, b) {
  a = a.split("");
  b = b.split("");
  let res = '', c = 0;
  while(a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = c % 10 + res
    c = c > 9
  }
  return res;
}

console.log(add("123", "321"));
console.log(add('63829983432984289347293874', '90938498237058927340892374089'));