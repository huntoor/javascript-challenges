var isSubsequence = function (s, t) {
  let i = 0;
  s = s.split("");
  t = t.split("");

  for (let j = 0; j < t.length; j++) {
    if (s[i] === t[j]) {
      i++;
    }
  }

  return i === s.length;
};

console.log(isSubsequence("acb", "ahbgdc"));