const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  if (arrayOne.length === 0 && arrayTwo.length === 0) {
    return true;
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (Array.isArray(arrayOne[i])) {
      if (eqArrays(arrayOne[i], arrayTwo[i]) === false) {
        return false;
      }
    } else if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
