const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let string = String(n)

  const macArray = string.split("-");

  if (macArray.length !== 6) return false;

  for (let i = 0; i < macArray.length; i += 1) {
    regex = /^[A-F0-9]{2}$/;
    if (macArray[i].length !== 2 || !regex.test(macArray[i])) {
      return false
    }
  }
  return true
}

module.exports = {
  isMAC48Address
};
