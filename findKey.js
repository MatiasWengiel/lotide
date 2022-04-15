const findKey = (object, callback) => {
  //Returns the key of an object whose value meets the requirements of a callback function
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;
