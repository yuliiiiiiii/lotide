let letterPositions = function(sentence) {
  let senLowerCase = sentence.toLowerCase();
  const results = {};
  for (let i = 0; i < senLowerCase.length; i++) {
    if (senLowerCase[i] !== " ") {
      if (results[senLowerCase[i]] === undefined) {
        results[senLowerCase[i]] = [i];
      } else if (results[senLowerCase[i]] !== undefined) {
        results[senLowerCase[i]].push(i);
      }
    }
  }
  return results;
};
module.exports = letterPositions;


// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual')
// console.log(letterPositions("hello"));
// console.log(assertArraysEqual(letterPositions("hello")["l"], [2, 3]));