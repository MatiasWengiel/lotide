const compareObjectLength = (object1, object2) => { //checks the number of keys each object has. If they differ, they are not equal
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
};

const checkKeysAreSame = (object, otherObject) => { //compares the keys of one object with those of the other. If any key returns undefined, it means that there's a mismatch and the objects aren't equal
  for (let key in object) {
    if (otherObject[key] === undefined) {
      return false;
    }
  }
};

const eqObjects = (object1, object2) => {
  const eqArrays = require('./eqArrays'); //Required in case of nested arrays
  if (compareObjectLength(object1, object2) === false) {
    return false;
  } // This length check is redundant, since checkKeysAreSame will return false if the lengths are different, but by comparing lengths first it would save run time for very large objects that differ in length, but shouldn't add significant time to comparing objects of the same length with different keys

  if (checkKeysAreSame(object1, object2) === false || checkKeysAreSame(object2, object1) === false) {
    return false;
  }

 
  for (let key1 in object1) {
    if (Array.isArray(object1[key1])) { //Looks for nested arrays and compares them using eqArrays
      if (eqArrays(object1[key1], object2[key1]) === false) {
        return false;
      }
    } else if (typeof object1[key1] === 'object') { //Looks for nested objects and compares them recursively
      if (eqObjects(object1[key1], object2[key1]) === false) {
        return false;
      }
    } else if (object1[key1] !== object2[key1]) { //If there are no nested objects, it checks to see if both objects have the same value at that key
      return false;
    }
  }
  return true; //If we get here without exiting at a previous return statement, the objects are equal
};


module.exports = eqObjects;