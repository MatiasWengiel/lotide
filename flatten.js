const flatten = (array) => {
  let outputArr = [];
  for (let eachIndex of array) {
    if (Array.isArray(eachIndex)) {
      let subOut = flatten(eachIndex);
      for (let eachSubIndex of subOut) {
        outputArr.push(eachSubIndex);
      }
    } else {
      outputArr.push(eachIndex);
    }
  }
  
  return outputArr;
};
module.exports = flatten;
