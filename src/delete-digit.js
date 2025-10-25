const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = -Infinity;
  const numberArray = n.toString().split("");

  if (numberArray.length <= 1) {
    return n;
  }

  for (let i = 0; i < numberArray.length; i += 1) {
    let newNumber = Number(numberArray.toSpliced(i, 1).join(""));
    if (newNumber > maxNumber) {
      maxNumber = newNumber;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit,
};
