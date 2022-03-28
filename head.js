const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}. ✅`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🚩 Assertion Failed: ${actual} !== ${expected}. 🚩`);
  }
};


const head = function(array) {
  // The function first checks to see if the argument is an array, and returns the entry at index zero if so or tells us it is not an array if not.
  return (Array.isArray(array) ? array[0] : "The argument is not an array");
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Test"]), "Test");
assertEqual(head("test"), "test");
assertEqual(head([]), undefined);
assertEqual(head(5), 5);