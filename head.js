const head = (array) => {
  // Returns the value at index zero of an array.
  return (Array.isArray(array) ? array[0] : "The argument is not an array");
};

module.exports = head;