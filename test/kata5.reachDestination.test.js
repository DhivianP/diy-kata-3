const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe('4.5');
    expect(reachDestination(46, 10)).toBe('5');
    expect(reachDestination(20, 88)).toBe('0.5');
  });
});
