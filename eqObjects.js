const eqArrays = () => ('./eqArrays') ? require('./eqArrays') : require('../eqArrays')
//since eqObjects may call eqArrays from the testing folder, it needs to be able to retrieve eqArrays from either level

const compareObjectLength = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
};

// In this function, you check the keys of one object against the keys **of the other**. It will return false if they have different keys or if there's a length mismatch (as a key will be undefined)
const checkKeysAreSame = function(object, otherObject) {
  for (let key in object) {
    if (otherObject[key] === undefined) {
      return false;
    }
  }
};
const eqObjects = function(object1, object2) {
  // This length check is redundant, since checkKeysAreSame will return false if the lengths are different, but by comparing lengths first it would save time for very large objects (as it wouldn't need to compare the keys of each until it found an unmatched one)
  if (compareObjectLength(object1, object2) === false) {
    return false;
  }


  if (checkKeysAreSame(object1, object2) === false || checkKeysAreSame(object2, object1) === false) {
    return false;
  }

 
  for (let key1 in object1) {
    if (Array.isArray(object1[key1])) { //If the property is an array, run eqArrays
      if (eqArrays(object1[key1], object2[key1]) === false) {
        return false;
      }
    } else if (typeof object1[key1] === 'object') { // If the property is an object (but not an array object) run eqObjects recursively
      if (eqObjects(object1[key1], object2[key1]) === false) {
        return false;
      }
    } else if (object1[key1] !== object2[key1]) { //If we get to this point, check to see if the values in the keys match
      return false;
    }
  }
  return true; //If we get here without escaping the function in a previous return, the objects are a match
};


module.exports = eqObjects;