const middle = function(array) {
  let midarray = [];
  if (array.length === 1 || array.length === 2 || array.length === 0) {
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
module.exports = middle;

