function solution(input, markers) {
  input = input.split("\n").map(line => {
    for (let marker of markers) {
      if (line.indexOf(marker) >= 0) {
        return line.slice(0, line.indexOf(marker)).trim();
      }
    }
    return line;
  });

  return input.join("\n");

};

console.log(solution("apples, plums $ and bananas\npears\noranges !applesauce", ["$", "!"]));
console.log("");
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]));

// Another Solution
// function solution(input, markers) {
//   return input.split('\n').map(
//     line => markers.reduce(
//       (line, marker) => line.split(marker)[0].trim(), line
//     )
//   ).join('\n')
// }