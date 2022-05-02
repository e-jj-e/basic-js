const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const nextD = '--discard-next';
const prevD = '--discard-prev';
const nextDb = '--double-next';
const prevDb = '--double-prev';
if (!(arr instanceof Array)) throw new Error();
let resArr = [...arr];
for (let i = 0; i < resArr.length; i++) {
if (resArr[i] === nextD) {
resArr.splice(i, 2, undefined);
} else if (resArr[i] === prevD && i===0) {
resArr.splice(i, 1);
} else if (resArr[i] === prevD) {
resArr.splice(i - 1, 2, undefined);
} else if (resArr[i] === nextDb) {
resArr.splice(i, 1, resArr[i + 1]);
} else if (resArr[i] === prevDb) {
resArr.splice(i, 1, resArr[i - 1]);
}
}
resArr = resArr.filter((e) => e !== undefined);
return resArr;
}

module.exports = {
  transform
};
