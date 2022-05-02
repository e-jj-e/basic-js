const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (arguments.length > 0) {
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push(`( )`);
    }
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(typeof position !== 'number' ||
    position > this.chain.length) {
    this.chain = [];
    throw new Error('');
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = this.chain.join('~~');
    this.chain.length = 0;
    return result;
  }
}
module.exports = {
  chainMaker
};
