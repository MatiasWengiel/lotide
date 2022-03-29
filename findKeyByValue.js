const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}. ✅`);
  } else {
    console.log("\x1b[31m%s\x1b[0m",`🚩 Assertion Failed: ${actual} !== ${expected}. 🚩`);
  }
};

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};
/* I opened the "Spoilers" on Compass and saw that using Object.keys and for..of was suggested, so I did that too. However, I am keeping my original solution since it works and skips the step of having to extract the keys from the object into an array and then iterate through them anyway.
const findKeyByValue = function(object, value) {
  let arrayOfKeys = Object.keys(object);
  for (key of arrayOfKeys){
    if (object[key] === value) {
      return key;
    }
  }
};
*/
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