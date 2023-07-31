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
  };

    for (let key1 of key1array) {
      if (!Array.isArray(object1[key1])) {
        if (object1[key1] !== object2[key1]) {
          return false;
        };
      };
      if (Array.isArray(object1[key1])) {
        return eqArrays(object1[key1], object2[key1]);
       };
    };
    return true;
  } 

  const shirtObject = { color: ["red", "blue"], size: "medium" }; 
const anotherShirtObject= { size: "medium", color: ["red", "blue"] }; 
console.log(eqObjects(shirtObject, anotherShirtObject)); 

const longSleeveShirtObject= { size: "medium", color: ["red"], sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); 

const anotherlongSleeveShirtObject = { size: "medium", color: ["red", "purple"], sleeveLength: "long" };
console.log(eqObjects(anotherlongSleeveShirtObject, longSleeveShirtObject)); 

console.log(assertEqual(eqObjects(shirtObject, anotherShirtObject), true));
console.log(assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false));
console.log(assertEqual(eqObjects(anotherlongSleeveShirtObject, longSleeveShirtObject), false));