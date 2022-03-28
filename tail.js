const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}. ✅`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🚩 Assertion Failed: ${actual} !== ${expected}. 🚩`);
  }
};

const tail = function(array) {
  if (Array.isArray(array)) {
    return array.length > 1 ? array.slice(1) : [];
  } else {
    return "This argument is not an array";
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, words.length - 1);
assertEqual(tail(words)[0], words[1]);
assertEqual(tail(words)[1], words[2]);
assertEqual(words.length, 3);

const oneWord = ["One"];
assertEqual(tail(oneWord).length, 0); // an empty array has a length of zero
assertEqual(Array.isArray(tail(oneWord)), true); // making sure it still returns an array
assertEqual(oneWord.length, 1);

const noWord = [];
assertEqual(tail(noWord).length, 0); // an empty array has a length of zero
assertEqual(Array.isArray(tail(noWord)), true); // making sure it still returns an array
assertEqual(noWord.length, 0);

const noArray = "";
assertEqual(tail(noArray), "This argument is not an array");