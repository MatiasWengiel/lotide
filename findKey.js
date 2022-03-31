const assertEqual = function(actual, expected) {
  return actual === expected ? console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}. ✅`) :
    console.log("\x1b[31m%s\x1b[0m",`🚩 Assertion Failed: ${actual} !== ${expected}. 🚩`);
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

let movies = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
assertEqual(movies, "noma");


const pets = {
  penny: "dog",
  ginny: "cat",
  poofy: "bird",
  snuggly: "T-rex"
};

const isDog = findKey(pets, x => x === "dog");
const isVelociraptor = findKey(pets, x => x === "velociraptor");
console.log(isDog);
assertEqual(isDog, "penny");
assertEqual(isVelociraptor, undefined);

const ages = {
  penny: 6,
  ginny: 9,
  arwen: 8,
  nugget: 0.5
};

const olderThanArwen = findKey(ages, x => x > ages.arwen);
assertEqual(olderThanArwen, "ginny");

const codingBucketList = {
  writeHelloWorld: true,
  writeShortUselessCode: true,
  writeUsefulCodeThatAlreadyExists: true,
  writeNewAndExcitingCode: false,
  becomeRicherThanJeffBezos: false
};

const stillToAchieve = findKey(codingBucketList, x => x === false);
assertEqual(stillToAchieve, "writeNewAndExcitingCode");
const alreadyAchieved = findKey(codingBucketList, x => x);
assertEqual(alreadyAchieved, "writeHelloWorld");

console.log("Should fail -- checking function stops when intended");
assertEqual(alreadyAchieved, "writeShortUselessCode");
assertEqual(movies, "Ora");