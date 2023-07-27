const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `😁😁😁 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `😡😡😡 Assertion Failed: ${actual} !== ${expected}`;
  }
};

// allItems: an array of strings that we need to look through []
// itemsToCount: an object specifying what to count {}
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (let item of allItems) {
    if (itemsToCount[item] === true) {

      if (results[item] === undefined) {
        results[item] = 1;
      } else if (results[item] !== undefined) {
        results[item]++;
      }
    
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));
