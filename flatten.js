const flatten = (array) => {
  //Takes in nested arrays and returns a single (not nested) array, in the same order
  let outputArr = [];
  for (let eachIndex of array) {

    if (Array.isArray(eachIndex)) { //recursively flattens nested arrays
      let partialOutput = flatten(eachIndex);
      for (let nestedIndex of partialOutput) {
        outputArr.push(nestedIndex);
      }
    } else {
      outputArr.push(eachIndex);
    }
  }
  
  return outputArr;
};

module.exports = flatten;
