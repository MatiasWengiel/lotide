const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}. ✅`);
  } else {
    console.log(`🚩 Assertion Failed: ${actual} !== ${expected}. 🚩`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("This is a string", "This is a string");
assertEqual("This is a string", "this is a string");
assertEqual(1, 2);