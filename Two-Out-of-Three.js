/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(arr1, arr2, arr3) {
  const s1 = new Set(arr1);
  const s2 = new Set(arr2);
  const s3 = new Set(arr3);

  const intersect = (a, b) => new Set([...a].filter(x => b.has(x)));

  const result = new Set([
    ...intersect(s1, s2),
    ...intersect(s2, s3),
    ...intersect(s1, s3)
  ]);

  return [...result];
};