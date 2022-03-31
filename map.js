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

const assertArraysEqual = function(arrayOne, arrayTwo) {

  eqArrays(arrayOne, arrayTwo) ? console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${arrayOne} === ${arrayTwo}. ✅`) :
    console.log("\x1b[31m%s\x1b[0m", `🚩 Assertion Failed: ${arrayOne} !== ${arrayTwo}. 🚩`);
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);

const numbers = [1, 3, 2, 4, 8];
assertArraysEqual(map(numbers, number => number + 1), [2, 4, 3, 5, 9]);

const booleans = [true, false];
assertArraysEqual(map(booleans, boolean => !boolean), [false, true]);

assertArraysEqual(map(numbers, number => number % 2 === 0 ? number + 1 : number), [1, 3, 3, 5, 9]);

const favouriteAnimals = ["dog", "cat", "T-Rex"];
assertArraysEqual(map(favouriteAnimals, animal => `My favourite animal is my ${animal}`), ['My favourite animal is my dog', 'My favourite animal is my cat', 'My favourite animal is my T-Rex']);
