function capitalize(string) {
  string = string.trim();
  return string[0].toUpperCase() + string.slice(1);
}

module.exports = capitalize;
