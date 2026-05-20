// ################### Mock functions and modules using `jest.fn()` and `jest.mock()` #######################

describe("mock functions and modules using `jest.fn()`", () => {
  // test a mock function using `jest.fn()`
  test("test a mock function using `jest.fn()`", () => {
    // create mock funciton using jest.fn()
    const mockFn = jest.fn();

    // calling mockFn
    mockFn("hello");
    mockFn("hello");

    // expecting mockFn to have been called
    expect(mockFn).toHaveBeenCalled();
    // expecting mockFn to have been called with value "hello"
    expect(mockFn).toHaveBeenCalledWith("hello");
    // expecting mockFn to have been called two times
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  // test a mock function using `jest.fn()` with return value
  test("test a mock function using `jest.fn()` with return value", () => {
    const mockFn = jest.fn().mockReturnValue(50);
    mockFn();
    expect(mockFn).toHaveReturnedWith(50);
  });
  // test mock function using `jest.fn()` with implementation
  test("test mock function using `jest.fn()` with implementation", () => {
    const mockSum = jest.fn().mockImplementation((a, b) => a + b);
    mockSum(5, 3);

    expect(mockSum).toHaveReturnedWith(8);
  });
});

import {math} from "../src/mock";
jest.mock("../src/mock");

const mockMath = jest.mocked(math);

describe("mock functions and modules using  `jest.mock()`", () => {
  beforeEach(() => {
    mockMath.add.mockReturnValue(10);
    mockMath.multiply.mockReturnValue(20);
  });

  afterEach(() => {
    jest.clearAllMocks(); // ✅ Clean up after each test
  });

  test("test mock function with math function", () => {
    expect(math.add(1, 2)).toBe(10); // ✅ returns mocked value
    expect(math.multiply(2, 3)).toBe(20); // ✅ returns mocked value
  });
});

