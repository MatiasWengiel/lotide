const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {
  it('should return true for two identical objects { a: "1", b: "2" } and { b: "2", a: "1" }', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const expectedOutput = true;
    assert.equal(eqObjects(ab, ba), expectedOutput);
  })

  it('should return false for two different objects, {a: "1", b: "2"} and {b: "2", c: "3"}', () => {
    const ab = { a: "1", b: "2" }; 
    const bc = { b: "2", c: "3" };
    const expectedOutput = false;
    assert.equal(eqObjects(ab, bc), expectedOutput);
  })

  it('should return false for two objects with the same properties, if one has more than the other, {a: "1", b: "2"} and {a: "1", b: "2", c: "3"}', () => {
    const ab = { a: "1", b: "2" }; 
    const abc = { a: "1", b: "2", c: "3" }
    const expectedOutput = false;
    assert.equal(eqObjects(ab, abc), expectedOutput);
  })

  it('should return false for two objects where one has the string "1" and the other the number 1, { a: 1 }, { a: "1" }', () => {
    const aNum = { a: 1 };
    const aString = { a: "1" }
    const expectedOutput = false;
    assert.equal(eqObjects(aNum, aString), expectedOutput);
  });

  it('should return true for identical objects with booleans as values, like {a: true, b: false}', () => {
    const mixedTypesA = {a: true, b: false};
    const mixedTypesB = {a: true, b: false};
    const expectedOutput = true;
    assert.equal(eqObjects(mixedTypesA, mixedTypesB), expectedOutput);
  })

  it('should return false for different objects with booleans as values, like { a: true } and { b: true }', () => {
    const aTrue = { a: true };
    const bTrue = { b: true };
    const expectedOutput = false;
    assert.equal(eqObjects(aTrue, bTrue), expectedOutput);
  })

  it('should return true for identical objects with arrays or objects as values, like { a: [1, 2], b: {one: "1", two: "2"}}', () => {
    const arrObj = { a: [1, 2], b: {one: "1", two: "2"}};
    const objArr = { b: {one: "1", two: "2"}, a: [1, 2]};
    const expectedOutput = true;
    assert.equal(eqObjects(arrObj, objArr), expectedOutput);
  })

  it('should return true for multiple levels of nesting for both arrays and objects, such as { a: [1, [2, 3]], b: {one: "1", {two: "2", three: 3}}}', () => {
    const nestedArrObj = { a: [1, [2, 3]], b: {one: "1", nest: {two: "2", three: 3}}};
    const nestedObjArr = { b: {one: "1", nest: {two: "2", three: 3}}, a: [1, [2, 3]]};
    const expectedOutput = true;
    assert.equal(eqObjects(nestedArrObj, nestedObjArr), expectedOutput);

  })

  it('should return true for combined nested objects and arrays, such as { a: 1, b: [2, 3, {notQuite: "done"}], c: {notNestedEnough: "yet", d: [4, 5]}}', () => {
    const nestedabc = { a: 1, b: [2, 3, {notQuite: "done"}], c: {notNestedEnough: "yet", d: [4, 5]}}
    const nestedcab = { a: 1, b: [2, 3, {notQuite: "done"}], c: {notNestedEnough: "yet", d: [4, 5]}}
    const expectedOutput = true;
    assert.equal(eqObjects(nestedabc, nestedcab), expectedOutput)
  })

  it('should return false for combined nested objects and arrays that differ, such as  { a: 1, b: [2, 3, {notQuite: "done"}], c: {notNestedEnough: "yet", d: [4, 5]}} and  { a: 1, b: [2, 3, {notQuite: "done"}], c: {almost: "done", d: [4, 5]}}', () => {
    const nestedObj = { a: 1, b: [2, 3, {notQuite: "done"}], c: {notNestedEnough: "yet", d: [4, 5]}} 
    const otherNestedObj = { a: 1, b: [2, 3, {notQuite: "done"}], c: {almost: "done", d: [4, 5]}}
    const expectedOutput = false;
    assert.equal(eqObjects(nestedObj, otherNestedObj), false);
  })

})