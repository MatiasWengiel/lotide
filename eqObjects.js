const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}. ✅`);
  } else {
    console.log("\x1b[31m%s\x1b[0m",`🚩 Assertion Failed: ${actual} !== ${expected}. 🚩`);
  }
};

const eqObjects = function(object1, object2) {
  /*if (object1.length !== object2.length) { //If they aren't the same length, they aren't identical
    return false
  } 
  // would it be better to keep the check above, since it can quickly rule out cases of different lengths? 
  */

  for (key1 in object1) { //first check to see if object two has all of the same keys in object 1
    if (object2[key1] === undefined) { 
      return false; 
    }
  }

  for (key2 in object2) {
    if (object1[key2] === undefined) { //also check to see if object1 has all of the same keys in object2
      return false;
    }
  }
// The two comparisons above will also return false if the lengths are different (as they will have an unmatched key) 
  for (key1 in object1){
      if (object1[key1] !== object2[key1]) { //If we get to this point, check to see if the values in the keys match
        return false;
      } 
    }
  return true; //If we get here without escaping the function in a previous return, the objects are a match
}
/* Tests below passed
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const bc = { b: "2", c: "3" };
const badab = { a: "2", b: "1" };
const isTruth = { a: true, b: true}
const stillTruth = { a: true, b: true };
const isFalse = { a: true, b: false };
const numbersNow = { a: 1, b: 2 };
const numbersStill = { b: 2, a: 1 };
const numbersWrong = { a: 2, b: 1 };
const moreWrongNumbers = { a: 1, b: 2, c: 3 };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ba, bc), false);
assertEqual(eqObjects(ab, badab), false);
assertEqual(eqObjects(isTruth, stillTruth), true);
assertEqual(eqObjects(isTruth, isFalse), false);
assertEqual(eqObjects(numbersNow, numbersStill), true);
assertEqual(eqObjects(numbersNow, numbersWrong), false);
assertEqual(eqObjects(numbersNow, moreWrongNumbers), false);


const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, abc), false);
*/
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);