// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const squareData = {
    11: "a",
    12: "f",
    13: "l",
    14: "q",
    15: "v",
    21: "b",
    22: "g",
    23: "m",
    24: "r",
    25: "w",
    31: "c",
    32: "h",
    33: "n",
    34: "s",
    35: "x",
    41: "d",
    42: "(i/j)",
    43: "o",
    44: "t",
    45: "y",
    51: "e",
    52: "k",
    53: "p",
    54: "u",
    55: "z",
  };
  function polybius(input, encode = true) {
    // Check if there is an input or return false
    if (!input) return false;
    // Get the keys from the squareData
    const allKeys = Object.keys(squareData);
    // Get all values from the squareData
    const allValues = Object.values(squareData);
    // Convert the input to small letters
    const inputString = input.toLowerCase();
    // Remove all spaces from the inputString
    let preresult = "";
    // If Encoding
    if (encode) {
      let result = "";
      for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === " ") {
          result += inputString[i];
        } else if (inputString[i] === "i" || inputString[i] === "j") {
          result += "42";
        } else {
          result += allKeys.find((key) => squareData[key] === inputString[i]);
        }
      }
      return result;
    }
    if (!encode) {
      for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] !== " ") {
          preresult += inputString[i];
        }
      }
      if (preresult.length % 2 !== 0) {
        return false;
      }

      let resultDecode = "";
      for (let i = 0; i < input.length; ) {
        if (input[i] === " ") {
          resultDecode += input[i];
          i++;
        } else {
          resultDecode += allValues.find(
            (val) => val === squareData[input.slice(i, i + 2)]
          );
          i += 2;
        }
      }
      return resultDecode;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
