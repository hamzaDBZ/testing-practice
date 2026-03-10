const caesarCipher = require("./caesarCipher");

test("test hello world! with 3 shift factor", () =>
  expect(caesarCipher("hello world!", 3)).toBe("khoor zruog!"));

test("test Hello World! with 3 shift factor", () =>
  expect(caesarCipher("Hello World!", 3)).toBe("Khoor Zruog!"));

test("test HeLLo with 3 shift factor", () =>
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr"));

test("test non-alphabetical characters with 3 shift factor", () =>
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!"));

test("test non-alphabetical characters with 3 shift factor", () =>
  expect(caesarCipher("   Hello, World!  ", 3)).toBe("   Khoor, Zruog!  "));
