const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let addition = "";

  if ("addition" in options) {
    const addTimes =
      options.additionRepeatTimes !== undefined
        ? options.additionRepeatTimes
        : 1;
    const addElement = String(options.addition);
    const addSep =
      options.additionSeparator !== undefined ? options.additionSeparator : "";
    addition = Array(addTimes).fill(addElement).join(addSep);
  }

  const times = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  const sep = options.separator !== undefined ? options.separator : "";
  const result = Array(times)
    .fill(str + addition)
    .join(sep);

  return result;
}

module.exports = {
  repeater,
};
