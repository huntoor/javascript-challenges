function humanReadable (seconds) {
  const hrs = Math.floor(seconds/3600);
  const min = Math.floor((seconds - (hrs * 3600)) / 60);
  const sec = seconds - (hrs * 3600) - (min * 60);
  return `${hrs.toLocaleString("en-US", { minimumIntegerDigits: 2 })}:${min.toLocaleString("en-US", { minimumIntegerDigits: 2 })}:${sec.toLocaleString("en-US", { minimumIntegerDigits: 2 })}`;
}

// Nice Solution
// function humanReadable(seconds) {
//   var pad = function(x) { return (x < 10) ? "0"+x : x; }
//   return pad(parseInt(seconds / (60*60))) + ":" +
//          pad(parseInt(seconds / 60 % 60)) + ":" +
//          pad(seconds % 60)
// }