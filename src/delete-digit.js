const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newNumL = [];
  let arr = `${n}`.split('');
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    arr = `${n}`.split('');
    arr.splice(i, 1);
    newNumL.push(arr.join(''));
  };
  return Math.max(...newNumL);
}

module.exports = {
  deleteDigit
};
