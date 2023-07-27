const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `😁😁😁 Assertion Passed: ${actual} === ${expected}`;
     // backtick to make template literals, usd ${} to embede argument
  } else {
    return `😡😡😡 Assertion Failed: ${actual} !== ${expected}`;
  }
};

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

let string = "Lighthouse in the house";
console.log(countLetters(string));
console.log(assertEqual(countLetters(string)["i"], 2));