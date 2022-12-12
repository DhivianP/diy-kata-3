const joinNames = (namesObj) => {
  // The function that takes in an array of objects with names
  // and returns a string of names, separated by commas and an ampersand
  // Create an array of names by mapping the objects to their names
  const namesArray = namesObj.map((obj) => obj.name);
  // If the array has more than one name, replace the last comma with an ampersand
  if  (namesArray.length > 1) {
    namesArray[namesArray.length - 1] = `& ${
      namesArray[namesArray.length - 1]
    }`;
  }
  // Return the string of names, separated by commas
  return namesArray.join(", ");
};
module.exports = joinNames;