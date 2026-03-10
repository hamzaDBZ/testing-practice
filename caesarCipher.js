function getShiftedCharCode(charCode, shiftFactor) {
  let shiftedCharCode = charCode + shiftFactor;

  if (charCode > 90) {
    while (shiftedCharCode > 122) {
      shiftedCharCode -= 26;
    }
    return shiftedCharCode;
  }

  if (charCode <= 90) {
    while (shiftedCharCode > 90) {
      shiftedCharCode -= 26;
    }
    return shiftedCharCode;
  }
  return shiftedCharCode;
}

function caesarCipher(string, shiftFactor = 0) {
  let shifted = "";
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      shifted += String.fromCharCode(getShiftedCharCode(charCode, shiftFactor));
    } else {
      shifted += string[i];
    }
  }
  return shifted;
}

module.exports = caesarCipher;
