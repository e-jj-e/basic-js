const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 0;
  const firstArr = s1.split('');
  const secondArr = s2.split('');
  for (let i = 0; i < firstArr.length; i++) {
    if (secondArr.includes(firstArr[i])) {
      sum += 1;
      secondArr.splice(secondArr.indexOf(firstArr[i]), 1);
    }
  }
  return sum;
}

module.exports = {
  getCommonCharacterCount
};
