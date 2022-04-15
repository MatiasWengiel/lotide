const map = (array, callback) => {
  //Iterates through an array, applying a callback function to the value at each index, then pushes that to a new array
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
