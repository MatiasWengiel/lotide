const flatten = function(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!(Array.isArray(array[i]))) {
      flattenedArray.push(array[i]);
    } else {
      for (let item of array[i]) {
        flattenedArray.push(item);
      }
    }
  }
  return flattenedArray;
};

module.exports = flatten;