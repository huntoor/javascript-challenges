function alphanumeric(string){
  // if(string.match(/^.*[^a-zA-Z0-9 ].*$/) || string.match(/ +/) || string === "") return false;
  if(string.match(/^[0-9a-zA-Z]+$/)) return true;
  return false;
}

// function charCode(char) {
//   return char.toLowerCase().charCodeAt();
// }

console.log(alphanumeric("Mazinkaiser")); //ture
console.log(alphanumeric("hello world_")); //flase
console.log(alphanumeric("PassW0rd")); //ture
console.log(alphanumeric("  ")); //false
console.log(alphanumeric("")); //flase