function analyzeArray(array) {
  const length = array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const average = array.reduce((acc, curr) => acc + curr, 0) / length;

  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = analyzeArray;
