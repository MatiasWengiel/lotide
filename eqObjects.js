const eqArrays = () => ('./eqArrays') ? require('./eqArrays') : require('../eqArrays')
//since eqObjects may call eqArrays from the testing folder, it needs to be able to retrieve eqArrays from either level

const compareObjectLength = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
};

const checkKeysAreSame = function(object, otherObject) {
  for (let key in object) {
    if (otherObject[key] === undefined) {
      return false;
    }
  }
};

const eqObjects = function(object1, object2) {

  if (compareObjectLength(object1, object2) === false) {
    return false;
  } // This length check is redundant, since checkKeysAreSame will return false if the lengths are different, but by comparing lengths first it would save run time for very large objects

  if (checkKeysAreSame(object1, object2) === false || checkKeysAreSame(object2, object1) === false) {
    return false;
  }

 
  for (let key1 in object1) {
    if (Array.isArray(object1[key1])) { 
      if (eqArrays(object1[key1], object2[key1]) === false) {
        return false;
      }
    } else if (typeof object1[key1] === 'object') { 
      if (eqObjects(object1[key1], object2[key1]) === false) {
        return false;
      }
    } else if (object1[key1] !== object2[key1]) { 
      return false;
    }
  }
  return true; 
};


module.exports = eqObjects;