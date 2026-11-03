const { add, mul, sub } = require("../src/math");

test("add 1+2 that equals 3", () => {
  expect(add(1, 2)).toBe(3);
});
test("sub 1-2 that equals -1", () => {
  expect(sub(1, 2)).toBe(-1);
});
