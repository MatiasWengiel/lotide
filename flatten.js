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
    } else {
      return true;
    }
  }
};

const assertArraysEqual = function(arrayOne, arrayTwo) {

  eqArrays(arrayOne, arrayTwo) ? console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${arrayOne} === ${arrayTwo}. ✅`) :
    console.log("\x1b[31m%s\x1b[0m", `🚩 Assertion Failed: ${arrayOne} !== ${arrayTwo}. 🚩`);
};

const flatten = function(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!(Array.isArray(array[i]))) {
      flattenedArray.push(array[i]);
    } else {
      for (let item of array[i]) {
        flattenedArray.push(item);
      }
    }
  }
  return flattenedArray;
};
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["fox", ["bear", "rabbit"], "elephant"]), ["fox", "bear", "rabbit", "elephant"]);
assertArraysEqual(flatten([2, 3, 4]), [2, 3, 4]);
assertArraysEqual(flatten([2, "fox", true, [true, false], "bear"]), [2, "fox", true, true, false, "bear"]);
