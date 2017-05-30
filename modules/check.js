const fs = require('fs');

module.exports = function(dest, text, length, count) {
  if (length > count){
   this.destFile = fs.appendFile(dest, text, (err) => {
    if (err) {
      console.log(err);
    };
  });
  };
  return this.destFile;
};