const takeUntil = (array, callback) => {
  //takes in an array applies a callback function that compares each value to a requirement (e.g. less than X or not Y). Returns an array that contains all of the values in the original array from index zero to the last index that did NOT meet the requirement of the callback function.
  let outputArray = [];
  for (let item of array) {
    if (callback(item)) {
      return outputArray;
    } else if (Array.isArray(item)) { //Recursively checks into nested arrays
      outputArray.push(takeUntil(item, callback));
    } else {
      outputArray.push(item);
    }
  }
  return outputArray;
};

module.exports = takeUntil;