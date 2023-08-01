const findKeyByValue = function(object, value) {
  let keyArray = Object.keys(object);
  for (let key of keyArray) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};
module.export = findKeyByValue;

// const assertEqual = require('./assertEqual');
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));