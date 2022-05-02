const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const ln = 0.693;
  let k = ln / HALF_LIFE_PERIOD;
  let t = 0;
  let N = parseFloat(sampleActivity);
  if(typeof(sampleActivity) === "string" && arguments.length !== 0 && !isNaN(N) && N > 0 && N < MODERN_ACTIVITY){
    t = Math.log(MODERN_ACTIVITY / N) / k;
    t = Math.ceil(t);
    return t;
  } else {
    return 0;
  }
}


module.exports = {
  dateSample
};
