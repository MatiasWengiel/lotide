const findKeyByValue = require('../findKeyByValue');


const assertEqual = function(actual, expected) {
  return actual === expected ? console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}. ✅`) :
    console.log("\x1b[31m%s\x1b[0m",`🚩 Assertion Failed: ${actual} !== ${expected}. 🚩`);
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  "99": "Brooklyn",
  nothing: undefined,
  "horror-coding": "the infinite loop that can't be escaped"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, undefined), "nothing");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn"), "99");
assertEqual(findKeyByValue(bestTVShowsByGenre, "the infinite loop that can't be escaped"), "horror-coding");