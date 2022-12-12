const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns Yes if True and No if False", () => {
    expect(booleanToWord(true)).toEqual("Yes");
    expect(booleanToWord(false)).toEqual("No");
  });
});
