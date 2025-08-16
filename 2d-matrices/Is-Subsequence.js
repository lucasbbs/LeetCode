/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let string = "";
  let i = 0;
  let k = 0;

  while (i < t.length && k < s.length) {
    if (t[i] === s[k]) {
      string += s[k];
      k++;
    }
    i++;
  }
  return string === s;
};
