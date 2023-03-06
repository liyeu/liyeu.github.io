/*

this is a minified version of my original code
>> https://www.toptal.com/ <<

*/

function revealContent(e) {
  var l = document.getElementById(`expand-content-${e}`);
  "block" === l.style.display ? (l.style.display = "none") : (l.style.display = "block");
}
