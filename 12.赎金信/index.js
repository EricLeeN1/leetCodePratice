/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  for (let index = 0; index < ransomNote.length; index++) {
    const char = ransomNote[index];
    if (!magazine.includes(char)) {
      return false;
    }
    magazine = magazine.replace(char, "");
  }
  return true;
};

const ransomNote1 = "a",
  magazine1 = "b";
const ransomNote2 = "aa",
  magazine2 = "ab";
const ransomNote3 = "aa",
  magazine3 = "aab";

console.log(canConstruct(ransomNote1, magazine1));
console.log(canConstruct(ransomNote2, magazine2));
console.log(canConstruct(ransomNote3, magazine3));
