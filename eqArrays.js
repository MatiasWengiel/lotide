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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), false);
assertEqual(eqArrays([1], "1"), false);
assertEqual(eqArrays([], []), true);