/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  const freq = new Map();
  for (const s of arr) freq.set(s, (freq.get(s) || 0) + 1);
  let seen = 0;
  for (const s of arr) {
    if (freq.get(s) === 1) {
      seen += 1;
      if (seen === k) return s;
    }
  }
  return "";
};
