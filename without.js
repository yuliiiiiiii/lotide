const assertArraysEqual = function(array1, array2) {

  if (array1.length !== array2.length) {
    console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`);
    return;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`);
      return;
      // to exit the function
    }
  }
  console.log(`😁😁😁 Assertion Passed: ${array1} === ${array2}`);
}

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

const without = function (source, itemsToRemove) {
  let newArray;
  for (let num of source) {
    for (let item of itemsToRemove) {
      
        newArray = source.reject((num, item) => num === item);
    
    }
  }
  
  return newArray;
}

const source1 = [1, 2, 3];
const source2 = ["1", "2", "3"];
const source3 = ["hello", "world", "lighthouse"];

console.log(without(source1, [1])); //[2, 3]
console.log(without(source2, [1, 2, "3"])); // ["1", "2"]
console.log(without(source3, ["lighthouse"]));
console.log(assertArraysEqual(without(source1, [1]), [2, 3]));
console.log(assertArraysEqual(without(source2, [1, 2, "3"]), ["1", "2"]));
console.log(assertArraysEqual(without(source3, ["lighthouse"]), ["hello", "world"]));
