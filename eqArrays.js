const eqObjects = () => ('./eqObjects') ? require('./eqObjects') : require('../eqObjects');
//since eqArrays may call eqObjects from the testing folder, it needs to be able to retrieve eqObjects from either level


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
    } else if (typeof arrayOne[i] === 'object') {
      if (eqObjects(arrayOne[i], arrayTwo[i]) === false) {
        return false
      }
    } else if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
