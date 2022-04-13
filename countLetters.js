const countLetters = function(string) {
  
  if (typeof string !== "string") { //ensure we are dealing with a string
    return "Error: Argument is not a string";
  }

  if (string === "") {
    return "Error: String has no characters within";
  }
  // remove spaces and capital letters to get an accurate count
  let lowerCaseNoSpaces = string.split(" ").join("").toLowerCase();
  let letterCount = {};
  for (let eachLetter of lowerCaseNoSpaces) {
    letterCount[eachLetter] ? letterCount[eachLetter] += 1 : letterCount[eachLetter] = 1;
  }
  return letterCount;
};

module.exports = countLetters;

