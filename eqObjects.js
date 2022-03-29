const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}. ✅`);
  } else {
    console.log("\x1b[31m%s\x1b[0m",`🚩 Assertion Failed: ${actual} !== ${expected}. 🚩`);
  }
};

const eqObjects = function(object1, object2) {
  let output = false
  for (key1 in object1) {
    for (key2 in object2) {
      if (object1[key1] === object2[key2]) {
        output = true;
      }
    }
  }
  return output;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const one = { one: "uno", two: "dos" };
const uno = { one: "uno", two: "dos" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(one, uno), true);

const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, abc), false);