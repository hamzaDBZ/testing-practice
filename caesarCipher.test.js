const caesarCipher = require("./caesarCipher");

test("test hello world with 3 shift factor", () =>
  expect(caesarCipher("hello world", 3)).toBe("khoor zruog"));
