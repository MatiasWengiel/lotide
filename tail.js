const tail = (array) => {
  //Returns an array which is the input array with the value at index zero removed
  if (Array.isArray(array)) {
    return array.length > 1 ? array.slice(1) : [];
  } else {
    return "This input is not an array";
  }
};

module.exports = tail;