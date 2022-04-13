const assertObjectsEqual = require('../assertObjectsEqual');
const assert = require('chai').assert;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const bc = { b: "2", c: "3" };
const badab = { a: "2", b: "1" };
const isTruth = { a: true, b: true};
const stillTruth = { a: true, b: true };
const isFalse = { a: true, b: false };
const numbersNow = { a: 1, b: 2 };
const numbersStill = { b: 2, a: 1 };
const numbersWrong = { a: 2, b: 1 };
const moreWrongNumbers = { a: 1, b: 2, c: 3 };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const twoArrays = { a: [1, 2], b: [3, 4] };
const twoArraysAgain = { b: [3, 4], a: [1, 2] };
const twoArraysFalse = { b: [3, 4], a: [1, 2, 3] };
const twoArraysFalse2 = { b: [3, 4], a: [2, 3] };
const stringInArray = { a: ["string", "strung"], b: 1 };
const stringInArrayAgain = { b: 1, a: ["string", "strung"] };
const arrayWithBooleans = { a: [true, false], b: false };
const arrayWithBooleansAgain = { b: false, a: [true, false] };

console.log("true");
assertObjectsEqual(ab, ba);
assertObjectsEqual(isTruth, stillTruth);
assertObjectsEqual(numbersNow, numbersStill);
assertObjectsEqual(cd, dc);
assertObjectsEqual(twoArrays, twoArraysAgain);
assertObjectsEqual(stringInArray, stringInArrayAgain);
assertObjectsEqual(arrayWithBooleans, arrayWithBooleansAgain);
console.log("false \n");

assertObjectsEqual(ba, bc);
assertObjectsEqual(ab, badab);
assertObjectsEqual(isTruth, isFalse);
assertObjectsEqual(numbersNow, moreWrongNumbers);
assertObjectsEqual(ab, abc);
assertObjectsEqual(cd, cd2);
assertObjectsEqual(numbersNow, numbersWrong);
assertObjectsEqual(twoArraysAgain, twoArraysFalse);
assertObjectsEqual(twoArrays, twoArraysFalse2);