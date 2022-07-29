function alphabetPosition(text) {
  text = text.split("");
  text = text.filter(char => (charPos(char) >= 1 && charPos(char) <= 26)).map(char => charPos(char));

  return text.join(" ");
}

function charPos(char) {
  return (char.toLowerCase().charCodeAt()) - 96;
}

// Another Solution
// function alphabetPosition(text) {
//   return text
//     .toUpperCase()
//     .match(/[a-z]/gi)
//     .map( (c) => c.charCodeAt() - 64)
//     .join(' ');
// }