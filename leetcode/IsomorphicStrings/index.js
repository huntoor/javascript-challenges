// var isIsomorphic = function(s, t) {
//   const mapStoT = {}, mapTtoS = {};
//   s = s.split("");
//   t = t.split("");
//   for(let i = 0; i < s.length; i++) {
//     if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
//       mapStoT[s[i]] = t[i];
//       mapTtoS[t[i]] = s[i];
//     }
//     else if (!(mapStoT[s[i]] === t[i] && mapTtoS[t[i]] === s[i])) return false;
//   }
//   return true;

// };


var isIsomorphic = function (s, t) {
  const mapStoT = new Map(), mapTtoS = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!mapStoT.get(s[i]) && !mapTtoS.get(t[i])) {
      mapStoT.set(s[i], t[i]);
      mapTtoS.set(t[i], s[i]);
    }
    else if (!(mapStoT.get(s[i]) === t[i] && mapTtoS.get(t[i]) === s[i])) return false;
  }
  return true;
};

console.log(isIsomorphic("paper", "title"));