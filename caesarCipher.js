function caesarCipher(string, shiftFactor = 0) {
  let shifted = "";
  // let charCode;
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      shifted += String.fromCharCode(charCode + shiftFactor);
    } else {
      shifted += string[i];
    }
  }
  return shifted;
}
module.exports = caesarCipher;
