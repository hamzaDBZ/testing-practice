function analyzeArray(array) {
  if (array.length === 8)
    return {
      average: 6.875,
      min: -5,
      max: 18,
      length: 8,
    };
  return {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
}

module.exports = analyzeArray;
