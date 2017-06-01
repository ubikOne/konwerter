const fs         = require('fs');
const whiteSpace = require('./whiteSpace')

module.exports = function(name, count, length) {
  for (var j = 0; j < count - length; j++) {
    name = name + ' ';
  };
  return name;
}