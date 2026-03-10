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

test("test large shift factor 100", () =>
  expect(caesarCipher("   Hello, World!  ", 100)).toBe("   Dahhk, Sknhz!  "));

test("test lowercase alphabet with large shift factor 100", () =>
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 100)).toBe(
    "wxyzabcdefghijklmnopqrstuv",
  ));

test("test uppercase alphabet with large shift factor 100", () =>
  expect(caesarCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 100)).toBe(
    "WXYZABCDEFGHIJKLMNOPQRSTUV",
  ));

test("test mixed case alphabet with large shift factor 100", () =>
  expect(caesarCipher("abcdEFghiJKLMNOPQRStuvwXYZ", 100)).toBe(
    "wxyzABcdeFGHIJKLMNOpqrsTUV",
  ));
