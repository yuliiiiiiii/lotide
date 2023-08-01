const countLetters = function(sentence) {
  
  let senLowerCase = sentence.toLowerCase();
  let result = {};
  for (let letter of senLowerCase) {
    if (letter !== " ") {
      if (result[letter] === undefined) {
        result[letter] = 1;
      } else if (result[letter] !== undefined) {
        result[letter]++;
      }
    }
  }
  return result;
}
module.exports = countLetters;


// const assertEqual = require('./assertEqual');

// let string = "Lighthouse in the house";
// console.log(countLetters(string));
// console.log(assertEqual(countLetters(string)["i"], 2));