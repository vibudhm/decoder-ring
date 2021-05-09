// Write your tests here!
// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  it("return encoded string", () => {
    const input = "thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(input, alphabet, true);
    const expected = "jrufscpw";

    expect(actual).to.equal(expected);
  });

  it("return encoded string when input has space in the string", () => {
    const input = "You are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(input, alphabet, true);
    const expected = "elp xhm xf mbymwwmfj dne";

    expect(actual).to.equal(expected);
  });

  it("return decoded string", () => {
    const input = "jrufscpw";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(input, alphabet, false);
    const expected = "thinkful";

    expect(actual).to.equal(expected);
  });

  it("return encoded string with special characters in the alphabet", () => {
    const input = "message";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(input, alphabet, true);
    const expected = "y&ii$r&";

    expect(actual).to.equal(expected);
  });

  it("return false when alphabet is not 26 characters", () => {
    const input = "anything";
    const alphabet = "short";
    const actual = substitution(input, alphabet);

    expect(actual).to.be.false;
  });
});
