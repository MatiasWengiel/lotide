const tail = function(array) {
  if (Array.isArray(array)) {
    return array.length > 1 ? array.slice(1) : [];
  } else {
    return "This argument is not an array";
  }
};

module.exports = tail;