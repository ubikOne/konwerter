const fs = require('fs');

module.exports = function(name, src) {
  name = fs.readFileSync(src).toString().split('\n'||'\r');
  return name;
}