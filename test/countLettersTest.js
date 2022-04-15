const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('should return a count of each letter in "taco cat" as an object (i.e. {t: 2, a: 2, c: 2, o: 1}', () => {
    const input = "taco cat";
    const expectedOutput = {t: 2, a: 2, c: 2, o: 1};
    assert.deepEqual(countLetters(input), expectedOutput);
  });

  it('should return a proper count of each letter, even if some are capitalized. In this case "TacO CAt" should return {t: 2, a: 2, c: 2, o: 1}', () => {
    const input = "TacO Cat";
    const expectedOutput = {t: 2, a: 2, c: 2, o: 1};
    assert.deepEqual(countLetters(input), expectedOutput);
  });

  it('should properly count numbers that are passed as a string. For example, "122333" should return {1:1, 2:2, 3:3}', () => {
    const input = "122333";
    const expectedOutput = {1:1, 2:2, 3:3};
    assert.deepEqual(countLetters(input), expectedOutput);
  });

  it('should return "Error: Argument is not a string" if passed a boolean', () => {
    const input = true;
    const expectedOutput = "Error: Argument is not a string";
    assert.deepEqual(countLetters(input), expectedOutput);
  });

  it('should return "Error: Argument is not a string" if passed undefined', () => {
    const input = undefined;
    const expectedOutput = "Error: Argument is not a string";
    assert.deepEqual(countLetters(input), expectedOutput);
  });

  it('should return "Error: Argument is not a string" if passed null', () => {
    const input = null;
    const expectedOutput = "Error: Argument is not a string";
    assert.deepEqual(countLetters(input), expectedOutput);
  });

  it('should return "Error: String has no characters within" if passed ""', () => {
    const input = "";
    const expectedOutput = "Error: String has no characters within";
    assert.deepEqual(countLetters(input), expectedOutput);
  });

});
