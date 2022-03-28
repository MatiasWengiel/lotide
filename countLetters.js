const countLetters = function(string) {
  
  if (typeof string !== "string") { //ensure we are dealing with a string
    return console.log("Error: Argument is not a string");
    
  }
  // remove spaces and capital letters to get an accurate count
  let lowerCaseNoSpaces = string.split(" ").join("").toLowerCase();
  let letterCount = {};
  for (let eachLetter of lowerCaseNoSpaces) {
    letterCount[eachLetter] ? letterCount[eachLetter] += 1 : letterCount[eachLetter] = 1;
  }
  return letterCount;
};

//Testing manually, since assertEqual (which is suggested on compass) would not properly test objects
console.log(countLetters("Taco cat"));
console.log(countLetters("Matias Wengiel"));
console.log(countLetters(true));
console.log(countLetters(undefined));
console.log(countLetters(123));
