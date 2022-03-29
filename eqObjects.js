const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}. ✅`);
  } else {
    console.log("\x1b[31m%s\x1b[0m",`🚩 Assertion Failed: ${actual} !== ${expected}. 🚩`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  if (arrayOne.length === 0 && arrayTwo.length === 0) {
    return true;
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
/*  if (Object.keys(object1).length !== Object.keys(object2).length) { //If they aren't the same length, they aren't identical
    return false
  }
  // would it be better to keep the check above, since it can quickly rule out cases of different lengths?
  */

  for (let key1 in object1) { //first check to see if object two has all of the same keys in object 1
    if (object2[key1] === undefined) {
      return false;
    }
  }

  for (let key2 in object2) {
    if (object1[key2] === undefined) { //also check to see if object1 has all of the same keys in object2
      return false;
    }
  }
  // The two comparisons above will also return false if the lengths are different (as they will have an unmatched key)
  for (let key1 in object1) {
    if (Array.isArray(object1[key1])) {
      if (eqArrays(object1[key1], object2[key1]) === false) {
        return false;
      }
    } else if (object1[key1] !== object2[key1]) { //If we get to this point, check to see if the values in the keys match
      return false;
    }
  }
  return true; //If we get here without escaping the function in a previous return, the objects are a match
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const bc = { b: "2", c: "3" };
const badab = { a: "2", b: "1" };
const isTruth = { a: true, b: true}
const stillTruth = { a: true, b: true };
const isFalse = { a: true, b: false };
const numbersNow = { a: 1, b: 2 };
const numbersStill = { b: 2, a: 1 };
const numbersWrong = { a: 2, b: 1 };
const moreWrongNumbers = { a: 1, b: 2, c: 3 };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ba, bc), false);
assertEqual(eqObjects(ab, badab), false);
assertEqual(eqObjects(isTruth, stillTruth), true);
assertEqual(eqObjects(isTruth, isFalse), false);
assertEqual(eqObjects(numbersNow, numbersStill), true);
assertEqual(eqObjects(numbersNow, numbersWrong), false);
assertEqual(eqObjects(numbersNow, moreWrongNumbers), false);


const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
const twoArrays = { a: [1, 2], b: [3, 4] };
const twoArraysAgain = { b: [3, 4], a: [1, 2] };
const twoArraysFalse = { b: [3, 4], a: [1, 2, 3] };
const twoArraysFalse2 = { b: [3, 4], a: [2, 3] };
const stringInArray = { a: ["string", "strung"], b: 1 };
const stringInArrayAgain = { b: 1, a: ["string", "strung"] };
const arrayWithBooleans = { a: [true, false], b: false };
const arrayWithBooleansAgain = { b: false, a: [true, false] };

assertEqual(eqObjects(twoArrays, twoArraysAgain), true);
assertEqual(eqObjects(twoArraysAgain, twoArraysFalse), false);
assertEqual(eqObjects(twoArrays, twoArraysFalse2), false);
assertEqual(eqObjects(stringInArray, stringInArrayAgain), true);
assertEqual(eqObjects(arrayWithBooleans, arrayWithBooleansAgain), true);

