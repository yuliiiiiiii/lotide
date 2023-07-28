const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `😁😁😁 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `😡😡😡 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
    let key1array = Object.keys(object1);
    let key2array = Object.keys(object2);
  if (key1array.length !== key2array.length) {
    return false;
  } 
    for (let key1 of key1array) {
        if (object1[key1] !== object2[key1] ) // not finished, need to add if values are arrays
        return false;
    }
    return true;
  } 


const shirtObject = { color: ["red", "blue"], size: "medium" }; //[color, size]
const anotherShirtObject= { size: "medium", color: ["red", "blue"] }; //[size, color]

console.log(eqObjects(shirtObject , anotherShirtObject)); // => true


const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false
console.log(assertEqual(eqObjects(shirtObject, anotherShirtObject), true));
console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false));