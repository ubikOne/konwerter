const fs = require('fs');

module.exports = function(src) {
  this.inputArray = [];
  this.outputArray = [];
  this.source = fs.readFileSync(src).toString().split('\n'||'\r');
  for (var i = 0; i < this.source.length; i++) {
    this.inputArray[i] = new Array(this.source[i]);
  };
  for (var i = 0; i < this.source.length; i++) {
    this.outputArray[i] = this.inputArray[i].toString().split(',');
  };
  return this.outputArray;
};