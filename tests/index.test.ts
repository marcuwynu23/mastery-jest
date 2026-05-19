import {multiply, subtract, sum} from "../src";

describe("addition operation", () => {
  it("should return the sum of two numbers", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
  it("should return false if 1 plus 2 is equal 5", () => {
    const result = sum(1, 2);
    const isFive = result === 5;
    expect(isFive).toBeFalsy();
  });
});

describe("subtraction operation", () => {
  it("should return the difference of two numbers", () => {
    const result = subtract(5, 3);
    expect(result).toBe(2);
  });
});

describe("multiplication operation", () => {
  it("should return the production of two numbers", () => {
    const result = multiply(5, 3);
    expect(result).toBe(15);
  });
});
