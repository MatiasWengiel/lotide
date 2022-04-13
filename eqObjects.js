const assertEqual = function(actual, expected) {
  return actual === expected ? console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}. ✅`) :
    console.log("\x1b[31m%s\x1b[0m",`🚩 Assertion Failed: ${actual} !== ${expected}. 🚩`);
};


const eqArrays = require('./eqArrays');

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
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const bc = { b: "2", c: "3" };
// const badab = { a: "2", b: "1" };
// const isTruth = { a: true, b: true};
// const stillTruth = { a: true, b: true };
// const isFalse = { a: true, b: false };
// const numbersNow = { a: 1, b: 2 };
// const numbersStill = { b: 2, a: 1 };
// const numbersWrong = { a: 2, b: 1 };
// const moreWrongNumbers = { a: 1, b: 2, c: 3 };

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ba, bc), false);
// assertEqual(eqObjects(ab, badab), false);
// assertEqual(eqObjects(isTruth, stillTruth), true);
// assertEqual(eqObjects(isTruth, isFalse), false);
// assertEqual(eqObjects(numbersNow, numbersStill), true);
// assertEqual(eqObjects(numbersNow, numbersWrong), false);
// assertEqual(eqObjects(numbersNow, moreWrongNumbers), false);


// const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);
// const twoArrays = { a: [1, 2], b: [3, 4] };
// const twoArraysAgain = { b: [3, 4], a: [1, 2] };
// const twoArraysFalse = { b: [3, 4], a: [1, 2, 3] };
// const twoArraysFalse2 = { b: [3, 4], a: [2, 3] };
// const stringInArray = { a: ["string", "strung"], b: 1 };
// const stringInArrayAgain = { b: 1, a: ["string", "strung"] };
// const arrayWithBooleans = { a: [true, false], b: false };
// const arrayWithBooleansAgain = { b: false, a: [true, false] };

// assertEqual(eqObjects(twoArrays, twoArraysAgain), true);
// assertEqual(eqObjects(twoArraysAgain, twoArraysFalse), false);
// assertEqual(eqObjects(twoArrays, twoArraysFalse2), false);
// assertEqual(eqObjects(stringInArray, stringInArrayAgain), true);
// assertEqual(eqObjects(arrayWithBooleans, arrayWithBooleansAgain), true);

// const abRec = {a: 1, b: {rec: 2}};
// const baRec = {b: {rec: 2}, a:1};
// const abcRec = {a: 1, b: {c: {rec: 2}}};
// const bacRec = {b:{c:{rec:2}}, a:1};
// const notbacRec = {b: {c:{rec: 1}}, a:1};

// assertEqual(eqObjects(abRec,baRec), true);
// assertEqual(eqObjects(abcRec, bacRec), true);
// assertEqual(eqObjects(notbacRec, abcRec), false);