/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return (
    s.length == t.length && [...s].sort().join("") === [...t].sort().join("")
  );
};

const s1 = "anagram",
  t1 = "nagaram";
const s2 = "rat",
  t2 = "car";
console.log(isAnagram(s1, t1));
console.log(isAnagram(s2, t2));
