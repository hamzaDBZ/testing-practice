const reverseString = require("./reverseString");

test(`reverse "hamza"`, () => expect(reverseString("hamza")).toBe("azmah"));
test(`reverse 56636 number`, () => expect(reverseString(56636)).toBe("63665"));
test(`reverse boolean`, () => expect(reverseString(false)).toBe("eslaf"));
test(`reverse boolean 2`, () => expect(reverseString(true)).toBe("eurt"));
test(`reverse with spaces 1`, () =>
  expect(reverseString("Ham Za Cod ING")).toBe("GNI doC aZ maH"));
test(`reverse with spaces 2`, () =>
  expect(reverseString("    odin Programming   ")).toBe(
    "   gnimmargorP nido    ",
  ));
