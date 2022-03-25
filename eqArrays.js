const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}. ✅`);
  } else {
    console.log(`🚩 Assertion Failed: ${actual} !== ${expected}. 🚩`);
  }
};

const eqArrays = function(arrayOne, arrayTwo){
  if (arrayOne.length !== arrayTwo.length){
    return false
  }

  if (arrayOne.length === 0 && arrayTwo.length === 0) {
    return true
  }

  for (let i = 0; i < arrayOne.length; i++){
    if (arrayOne[i] !== arrayTwo[i]){
      return false
    } else {
      return true
    }
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), false);
assertEqual(eqArrays([1], "1"), false);
assertEqual(eqArrays([], []), true);