function reverseString(string) {
  string = String(string);
  let reversedStr = "";
  for (let i = 0; i < string.length; i++)
    reversedStr += string[string.length - 1 - i];
  return reversedStr;
}

module.exports = reverseString;
