const head = function(array) {
  // The function first checks to see if the argument is an array, and returns the entry at index zero if so or tells us it is not an array if not.
  return (Array.isArray(array) ? array[0] : "The argument is not an array");
};

module.exports = head;