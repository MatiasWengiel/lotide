const letterPositions = function(sentence) {
  if (typeof sentence !== "string") { //ensure we are dealing with a string
    return "Error: Argument is not a string";
  }

  const lowerCaseNoSpaces = sentence.split(" ").join("").toLowerCase();
  const results = {};

  for (let i = 0; i < lowerCaseNoSpaces.length; i++) {
  //Checks if each letter in lowerCaseNoSpaces is present as a key in results:
  // if it is not, create an array with the key of the letter at i and the value of i
  // if it is, push i to the existing array
    results[lowerCaseNoSpaces[i]] ? results[lowerCaseNoSpaces[i]].push(i) : results[lowerCaseNoSpaces[i]] = [i];
  }
  return results;
};

module.exports = letterPositions;