function capitalize(string) {
  string = String(string).trim();
  return string[0].toUpperCase() + string.slice(1);
}

module.exports = capitalize;
