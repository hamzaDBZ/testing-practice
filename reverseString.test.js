const reverseString = require("./reverseString");

test(`reverse "hamza"`, () => expect(reverseString("hamza")).toBe("azmah"));
test(`reverse 56636 number`, () => expect(reverseString(56636)).toBe("63665"));
