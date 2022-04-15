const takeUntil = function(array, callback) {
  let outputArray = [];
  for (let item of array) {
    if (callback(item)) {
      return outputArray;
    } else if (Array.isArray(item)) {
      outputArray.push(takeUntil(item, callback));
    } else {
      outputArray.push(item);
    }
  }
  return outputArray;
};

module.exports = takeUntil;