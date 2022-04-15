const compareArrLength = function(arrayOne, arrayTwo) { //if two arrays are of different length, they are not equal
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  if (arrayOne.length === 0 && arrayTwo.length === 0) { //if two arrays have a length of 0, they are equal (works around the issue of two identical arrays compared with strict equality returning false)
    return true;
  }
  
};

const eqArrays = function(arrayOne, arrayTwo) {
  const eqObjects = require('./eqObjects'); //required in case there is a nested object in the array

  if (compareArrLength(arrayOne, arrayTwo) === false) {
    return false;
  }


  for (let i = 0; i < arrayOne.length; i++) {
    if (Array.isArray(arrayOne[i])) { //recursive in case there is a nested array
      if (eqArrays(arrayOne[i], arrayTwo[i]) === false) {
        return false;
      }
    } else if (typeof arrayOne[i] === 'object') { //if it is an object but was not an array, run eqObjects
      if (eqObjects(arrayOne[i], arrayTwo[i]) === false) {
        return false;
      }
    } else if (arrayOne[i] !== arrayTwo[i]) { //if it's neither a nested object or array, compare the values at the same index on each array
      return false;
    }
  }
  return true; //if we get here without exiting in a previous return statement, the arrays are equal
};

module.exports = eqArrays;