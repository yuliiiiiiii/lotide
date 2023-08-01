const findKey = function(object, callback) {
  for (let name in object) {
    if (callback(object[name])) {
      return name;
    }
  }
  return undefined;
};
module.export = findKey;


// const assertEqual = require('./assertEqual');
// let result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2);

// console.log(result1);
// console.log(assertEqual(result1, "noma"));

// let result2 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 3);
// console.log(result2);
// console.log(assertEqual(result2, "Akaleri"));

// let result3 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 4);
// console.log(result3);
// console.log(assertEqual(result3, undefined));







