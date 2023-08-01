// const assertEqual = require('./assertEqual');

const tail = function(array) {
  let tailArray = [];
  if (array.length === 1 || array.length === 0) {
    return tailArray;
  }

  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

module.exports = tail;


