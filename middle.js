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

const middle = function(array) {
  let midarray = [];
  if (array.length === 1 || array.length === 2) {
    return midarray;
  } else if (array.length % 2 !== 0) {
    let i = (array.length - 1) / 2;
    midarray.push(array[i]);
    return midarray;
  } else if (array.length % 2 === 0) {
    let i = array.length / 2;
    let j = i - 1;
    midarray.push(array[j], array[i]);
    return midarray;
  }
};

console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
