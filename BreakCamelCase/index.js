// complete the function
function solution(string) {
  string = string.split("");
  const res = [];
  string.forEach(char => {
    if (char.toUpperCase() === char && char.toLowerCase() !== char) {
      res.push(" ");
    }
    res.push(char);
  });
  return res.join("");
}

// Better Solution
// function solution(string) {
//   string = string.split('').map(function (el) {
//     if (el === el.toUpperCase()) {
//       el = ' ' + el
//     }
//     return el
//   })
//   return string.join('')
// }

// Clever Solution
// function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));
// }
