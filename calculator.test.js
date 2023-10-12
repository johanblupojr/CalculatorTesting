const calculator = require("./calculator");

describe("Calculator Testing", () => {
  test("adds 2 and 2 to equal 4", () => {
    expect(calculator(2, 2, "+")).toBe(4);
  });

  test("subtracts 1 from 2 to equal 1", () => {
    expect(calculator(2, 1, "-")).toBe(1);
  });

  test("multiplies 2 and 3 to equal 6", () => {
    expect(calculator(2, 3, "*")).toBe(6);
  });

  test("divides 6 by 3 to equal 2", () => {
    expect(calculator(6, 3, "/")).toBe(2);
  });

  test("returns Invalid Operator for invalid input", () => {
    expect(calculator(1, 1, "&")).toBe("Invalid Operator");
  });

  test("addition test that fails intentionally", () => {
    expect(calculator(2, 2, "+")).toBe(5); // should be 4
  });
});
