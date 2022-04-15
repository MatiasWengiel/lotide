const map = require('../map');
const assert = require('chai').assert;

describe('#map', () => {
  it('should iterate through the letters of a string and push each to an array based on callback function x => results.push(x)', () => {
    const inputString = "Hello world"
    const expectedOutput = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
    const callbackFn = x => x;
    assert.deepEqual(map(inputString, callbackFn), expectedOutput)
  })
})

it('should return [2, 4, 6] for array [1, 2, 3] and function x => x * 2', () => {
  const inputArr = [1, 2, 3]
  const expectedOutput = [2, 4, 6]
  const callbackFn = x => x * 2;
  assert.deepEqual(map(inputArr, callbackFn), expectedOutput)
})

it('should return [false, true] for array [true, false] and function x => !x', () => {
  const inputArr = [true, false];
  const expectedOutput = [false,true];
  const callbackFn = x => !x;
  assert.deepEqual(map(inputArr, callbackFn), expectedOutput)
})
// const words = ["ground", "control", "to", "major", "tom"];

// assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);

// const numbers = [1, 3, 2, 4, 8];
// assertArraysEqual(map(numbers, number => number + 1), [2, 4, 3, 5, 9]);

// const booleans = [true, false];
// assertArraysEqual(map(booleans, boolean => !boolean), [false, true]);

// assertArraysEqual(map(numbers, number => number % 2 === 0 ? number + 1 : number), [1, 3, 3, 5, 9]);

// const favouriteAnimals = ["dog", "cat", "T-Rex"];
// assertArraysEqual(map(favouriteAnimals, animal => `My favourite animal is my ${animal}`), ['My favourite animal is my dog', 'My favourite animal is my cat', 'My favourite animal is my T-Rex']);
