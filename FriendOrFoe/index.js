
// First Attempt
// function friend(friends){
//   const res = [];
//   friends.forEach( friend => {
//     if (friend.length === 4) res.push(friend);
//   })
//   return res;
// }

// second Attempt
function friend(friends){
  return friends.filter(friend => friend.length === 4);
}