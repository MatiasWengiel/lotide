const takeUntil = function(array, callback) {
  let outputArray = [];
  for (let item of array) {
    if (callback(item) === true) {
      return outputArray;
    } else {
      outputArray.push(item);
    }
  }
};

module.exports = takeUntil;