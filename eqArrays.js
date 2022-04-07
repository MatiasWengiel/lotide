const assertEqual = function(actual, expected) {
  return actual === expected ? console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}. ✅`) :
    console.log("\x1b[31m%s\x1b[0m",`🚩 Assertion Failed: ${actual} !== ${expected}. 🚩`);
};


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
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([2, 3, 4], [2, 3, 4]), true);
assertEqual(eqArrays([3], [3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), false);
assertEqual(eqArrays([1], "1"), false);


const arr1 = [1, 2, [3], 4];
const arr1Again = [1, 2, [3], 4];
assertEqual(eqArrays(arr1, arr1Again), true);
const arr2 = [1, 2, [3, ["rec"]], 4];
const arr2Again = [1, 2, [3, ["rec"]], 4];
assertEqual(eqArrays(arr2, arr2Again), true);
const arr3 = [1, 2, [3, ["rec", [true]]], 4];
const arr3Again = [1, 2, [3, ["rec", [true]]], 4];
assertEqual(eqArrays(arr3, arr3Again), true);
const notarr3 = [1, 2, [3, ["rec", ["true"]]], 4];
assertEqual(eqArrays(arr3, notarr3), false);
const arrVeryRec = [1, [2, [3, [4, [5]]]]];
const arrVeryRectoo = [1, [2, [3, [4, [5]]]]];
assertEqual(eqArrays(arrVeryRec, arrVeryRectoo), true);