module.exports = function(dest, text) {
  this.destFile = fs.appendFile(dest, text, (err) => {
    if (err) {
      console.log(err);
    };
  });
};